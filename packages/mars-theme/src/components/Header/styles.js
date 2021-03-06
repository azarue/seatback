import { styled, css } from 'frontity';
import {
  SIZE_DESCTOP_LARGE,
  PADDING_DESCTOP_LARGE,
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  getPxSize,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  HEADER_HEIGHT,
  HEADER_HEIGHT_RESPONSIVE,
  SIZE_MOBILE,
} from '../../const/responsive';


const navStep = 9;
const headerHeight = HEADER_HEIGHT;
const headerHeightResponsive = HEADER_HEIGHT_RESPONSIVE;


export const Space = styled.div`
  width: 100%;
  height: ${headerHeight}px;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    height: ${headerHeightResponsive}px;
  }
`;

export const ResposnsiveMenu = styled.div`
  display: none;
  position: absolute;
  top: ${headerHeight}px;
  right: 0;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    display: block;
    top: ${headerHeightResponsive}px;
    width: 300px;    
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    width: calc(100% + ${PADDING_MOBILE * 2}px); 
  }
`;

export const NavIconSection = styled.div`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  display: none;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    display: flex;
  }
`;

export const NavIcon = styled.div`  
  
  top: 0;
  width: 28px;
  height: 21px;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

 

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #2E293C;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-of-type(1) {
      top: 0px;
    }
    &:nth-of-type(2) {
      top: ${navStep}px;
    }
    &:nth-of-type(3) {
      top: ${navStep}px;
    }
    &:nth-of-type(4) {
      top: ${navStep * 2}px;
    }
  }

  &:hover {
    span {
      background: #2E293C;
    }
  }

  ${(props) => props.isOpen && css`
    span {
      &:nth-of-type(1) {
        top: ${navStep}px;
        width: 0%;
        left: 50%;
      }

      &:nth-of-type(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:nth-of-type(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:nth-of-type(4) {
        top: ${navStep}px;
        width: 0%;
        left: 50%;
      }
    }
  `}
`;

export const Container = styled.div`
  position: fixed;
  z-index: 102;
  background-color: white;
  width: 100%;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 8px #0000000D;
  opacity: 1;

  @media (min-width: ${SIZE_DESCTOP_MEDIUM_2 + 1}px) {
    left: 0;
    top: 0;
  }

  ${(props) => props.isMenuOpen && css`
    @media (max-width: ${SIZE_MOBILE}px) {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      z-index: 105;
    }
  `}


  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${20}px;
    padding-right: ${20}px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    width: 60%;
    justify-content: flex-end;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    width: 55%;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP_SMALL)}) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 252px;
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
      width: 230px;
    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      width: 200px;
    }
    @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
      width: 134px;
    }
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    display: none;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: ${headerHeight}px;
  position: relative;
  @media (min-width: ${SIZE_DESCTOP_MEDIUM_2 + 1}px) {
    max-width: 1640px;
    margin: 0 auto;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    height: ${headerHeightResponsive}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    box-shadow: 2px 2px 8px #0000000D;
    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }

`;

export const Progress = styled.div`
  position:  absolute;
  bottom: 0;
  left: 0;
  background:  linear-gradient(
    to right,
    #52DE97 ${(props) => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
`;
