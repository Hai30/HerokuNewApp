import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ForecastDetails from './components/ForecastDetails/ForecastDetails';
import apiUtils from './api/apiUtils';
import { css } from '@emotion/core';

import BounceLoader from 'react-spinners/BounceLoader';
import './styles/App.css';

import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/theme'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import PageNotFound from './pages/PageNotFound'



import NightModeToggle from './components/NightModeToggle';
import { Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Logo} from './components/styles/components.styles'

const override = css`
  display: block;
  margin: auto;
`;

function App() {
  const theme = useSelector((state) => state.themeToggle.theme)
  const [mode, setMode] = useState(theme)

  
  const [load, setLoad] = useState(true);
  const [locationName, setLocationName] = useState();
  const [forecast, setForecast] = useState();
  const [currentConditions, setCurrentConditions] = useState();

  const getLocationName = (locationKey) => {
    fetch(`https://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${apiUtils.accuWeather.apiKey}`)
      .then(response => response.json())
      .then(result => setLocationName({ country: result.Country.LocalizedName, city: result.LocalizedName }));
  };

  const getWeekForecast = (locationKey) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiUtils.accuWeather.apiKey}&metric=true`)
      .then(response => response.json())
      .then(result => {
        setForecast(result.DailyForecasts);
      })
  };

  const getCurrentConditions = (locationKey) => {
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiUtils.accuWeather.apiKey}&details=true`)
      .then(response => response.json())
      .then(result => {
        setCurrentConditions(result[0]);
      })
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if(window.location.search.length === 0){
      fetch('https://ipfind.co/me?auth=' + apiUtils.ipfind.apiKey)
        .then(response => response.json())
        .then(result => {
          fetch('https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + apiUtils.accuWeather.apiKey + '&q=' + result.latitude + ',' + result.longitude)
            .then(res => res.json())
            .then(json => {
              window.location.search = `?locationKey=${json.Key}`;
            })
        })
    } else if(urlParams.has('locationKey')) {
      const urlParams = new URLSearchParams(window.location.search);
      const locationKey = urlParams.get('locationKey');
      getLocationName(locationKey);
      getWeekForecast(locationKey);
      getCurrentConditions(locationKey);
      setTimeout(() => setLoad(false), 2500);
    }
  }, []);


  let componentRender;
  if(load === true) {
    componentRender = <BounceLoader size={ 80 } color={ '#d2d2d2' } css={ override } />;
  } else {
    componentRender =
    <React.Fragment>
     
<ThemeProvider theme={theme ? Theme.lightTheme : Theme.darkTheme}>
    <GlobalStyle />
      <Router>
       <header>
          <Navbar bg='dark' className='navbar navbar-expand-lg navbar-dark' expand='lg' collapseOnSelect>
          <Container>
          <Navbar.Brand className='mr-n4'>
            <Navbar.Brand>
                <Nav.Link>
                  <Logo>Herolo Weather App</Logo>
                </Nav.Link>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          ><Nav>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home{' '}
                </Nav.Link>
                <Nav.Link>
                  <i className='fas fa-star'></i> Favorites
                </Nav.Link>
            </Nav>
            <NightModeToggle
              className='toggler'
              size={50}
              onChange={setMode}
              checked={mode}
              speed={2}
            />
 
          </Navbar.Collapse>
        </Container>
          </Navbar>
        </header>
           <Container>
             <Row className='justify-content-center mx-auto mt-5'>
               <Col md='auto'>
                 <Switch>
                    <Route path='/favorites' component={FavoritesPage} exact />
                    <Route path='/' component={HomePage} exact />
                 </Switch>
               </Col>
             </Row>
            </Container>
                    </Router>
                    
        </ThemeProvider>
        <main className='main-content'>
          <CurrentWeather locationName={ locationName } currentConditions={ currentConditions } />
          <ForecastDetails forecast={ forecast } todaysHighlights={ currentConditions } />
        </main>
        <footer>
          <p className=''>Weather Application made with React and AccuWeather API.</p>
             <i class="fab fa-github"></i>
          <p>Code available on <a href='https://github.com/Hai30/HerokuNewApp' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
       
        </footer>
    </React.Fragment>;
  }

  return (
    <div className="App">
      { componentRender }
    </div>
  );
}

export default App;


