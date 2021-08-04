import styled from 'styled-components'

const darkAndLight = (props) => (props.theme === true ? '#6e6e6e' : '#fff')
const lightAndDark = (props) => (props.theme === true ? '#fff' : '#6e6e6e')

export const Logo = styled.h3`
  color: #e9ebee;
  text-decoration: none;
`

export const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media ${({ theme }) => theme.mediaQueries['xlg-width']} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    grid-template-columns: 1fr;
    margin-left: 4.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    margin-left: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    margin-left: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    margin-left: 0.5rem;
  }
`

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 30%;
  z-index: 1;
  position: absolute;
  top: 140px;
  left: 60px;

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    width: 50%;
    top: 120px;
    left: 35px;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    left: 15px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    font-size: 80%;
    top: 100px;
    left: 15px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    top: 110px;
    left: -45px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    width: 50%;
    top: 120px;
    left: 35px;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`

export const WeatherImage = styled.img`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
`

export const WeatherText = styled.div`
  text-align: center;
  width: 80%;
  z-index: 1;
  position: absolute;
  top: 300px !important;
  left: 95px;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    top: 250px;
    left: 55px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    top: 230px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    top: 200px !important;
    left: 45px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    top: 195px !important;
    left: 40px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    top: 170px !important;
    left: 35px;
  }

  @media ${({ theme }) => theme.mediaQueries['height-below-375']} {
    top: 250px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    top: 240px;
    left: 65px;
  }
`


export const FavoriteButton = styled.div`
  z-index: 1;
  position: absolute;
  top: 140px;
  right: 40px;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    top: 150px !important;
    right: -60px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    top: 150px !important;
    left: 470px !important;
    width: 50px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    top: 120px !important;
    left: 430px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    top: 120px !important;
    left: 276px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    left: 240px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-height']} {
    top: 110px;
    right: 40px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    top: 115px;
  }
`

export const FavoriteText = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
  margin-left: 0.5rem;
  color: #e9ebee;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    display: none;
  }
`



export const NightModeButton = styled.button`
  cursor: pointer;
  overflow: hidden;
  width: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue}${props.sizeUnit}`
      : `${props.sizeValue}px`};
  height: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 0.47}${props.sizeUnit}`
      : `${props.sizeValue * 0.47}px`};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
`

export const NightModeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * -0.575}${props.sizeUnit}`
      : `${props.sizeValue * -0.575}px`};
  margin-left: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * -0.32}${props.sizeUnit}`
      : `${props.sizeValue * -0.32}px`};
  width: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 1.65}${props.sizeUnit}`
      : `${props.sizeValue * 1.65}px`};
  height: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 1.65}${props.sizeUnit}`
      : `${props.sizeValue * 1.65}px`};
`
/*
export const Suggestions = styled(Col)`
  z-index: 99;
  top: 100%;
  left: 16px;
  right: 0;
  width: 196px;
  padding: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-right: 1px solid #333;
  border-left: 1px solid #333;
  border-bottom: 1px solid #333;
  text-align: left;

  &:hover {
    background-color: #e9e9e9;
  }
`

export const CardForecast = styled(Card)`
  width: 10rem;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    width: 8.8rem;
    height: 90px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    width: 30rem;
    height: 200px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    height: 250px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    margin-left: 0.5rem;
    width: 18rem;
    height: 200px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    width: 15rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    width: 7.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    margin-left: 0.5rem;
    width: 22rem;
    height: 9rem;
  }
`
export const CardIcon = styled.img`
  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    width: 30%;
  }
`

export const CardText = styled.p`
  margin-bottom: 0;
  color: #e9ebee;
  text-shadow: 1px 1px 5px #222222;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 1.5rem;
  }
`
export const CardTitle = styled.h5`
  margin-bottom: 0;
  color: #e9ebee;
  text-shadow: 1px 1px 5px #222222;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 2rem;
    margin-bottom: 0.2rem;
    margin-top: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    margin-top: 2.3rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-height']} {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }
`
*/