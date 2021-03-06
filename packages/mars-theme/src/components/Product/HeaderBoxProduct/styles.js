import { styled } from 'frontity';
import {
  PADDING_DESCTOP_LARGE,
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  SIZE_MOBILE,
} from '../../../const/responsive';

export const HeaderFooter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  @media (max-width: ${SIZE_LAPTOP}px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    flex-wrap: wrap;
  }
`;

export const HeaderBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 130px;
  @media (max-width: ${SIZE_LAPTOP}px) {
    flex-wrap: wrap;
    padding-top: 100px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 40px;
  }
`;
export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 45px;
  width: 50%;
  position: relative;
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-right: 50px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    padding-right: 0;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-bottom: 40px;
  }

  h1 {
    width: 100%;
    text-align: left;
    font-size: 50px;
    line-height: 70px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #2E293C;
    opacity: 1;
    margin: 0;
    max-width: 423px;
    span{
      color: #52DE97;
    }

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 45px;
      line-height: 67px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 42px;
      line-height: 60px;
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      width: 100%;
      font-size: 32px;
      line-height: 42px;
      text-align: center;
      max-width: 100%;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 26px;
      line-height: 27px;
    }
  }
  button{
    @media (max-width: ${SIZE_LAPTOP}px) {
      margin-top: 30px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      margin-top: 20px;
    }
  }
  a {
    @media (max-width: ${SIZE_MOBILE}px) {
      width: 100%;
    }
  }
  p {
    text-align: left;
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #A09D9D;
    opacity: 1;
    max-width: 635px;
    width: 100%;
    margin: 0;
    padding-top: 30px;
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 22px;
      line-height: 36px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 20px;
      line-height: 32px;
    }
    @media (max-width: ${SIZE_LAPTOP}px) {
      width: 100%;
      font-size: 18px;
      line-height: 32px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 14px;
      line-height: 24px;
      br {
        content: " ";  
        float:right;
        display: none;
      }      
    }
    @media (max-width: 340px) {
      margin-left: -10px;
      margin-right: -10px;
      width: 120%;
    }
  }
`;

export const Scroll = styled.div`
  display: inline-block;
  padding-top: 45px;

  button {
    padding: 0;
    border: none;
    outline: none;
    background-color: ${(props) => props.buttonColor};
    border: 1px solid #52DE97;
    width: 58px;
    height: 58px;
    border-radius: 29px;
    transition: all 0.3 ease-in-out;
    color: ${(props) => props.textColor};
    z-index: 1;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out; 
    margin-right: 15px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    width: 212px;
    &:hover {
      background-color: ${(props) => props.buttonColorHover};
      color: ${(props) => props.textColorHover};
      border-color: ${(props) => props.buttonColorHover};
    }

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 18px;
      line-height: 22px;
      min-height: 50px;
      padding: 0 45px;
      height: auto;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 16px;
      line-height: 20px;
      min-height: 46px;
      padding: 0 42px;
    }

    @media (max-width: ${SIZE_LAPTOP}px) {
      margin-top: 0 !important;
    }

    @media(max-width: ${SIZE_MOBILE}px) {
      font-size: 12px;
      line-height: 15px;
      width: 100%;
      height: 47px;
    }
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    margin-top: 0;
    padding-top: 30px;   
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    width: 100%;
    margin: 0;   
  }
`;

export const BannerArticlesBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 770px;
  height: 507px;
  text-align: center;

  img {
    max-width: 100%;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    height: auto;
  }

`;

export const BannerArticlesContainer = styled.div`
  width: 770px;
  height: 507px;
  border-radius: 14px 14px 0px 0px;
  opacity: 1;
  background-image: url(${(props) => (props.imgSrc ? props.imgSrc : 'https://i.picsum.photos/id/866/1200/1000.jpg')});
  background-repeat: no-repeat;
  background-size: ${(props) => props.bg_size};
  background-position: center center;
  position: relative;
  border-radius: 14px;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    width: 600px;
    height:400px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    width: 500px;
    height: 350px;
  }

  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
    font-size: 32px;
    line-height: 42px;
    max-width: 770px;
    height: 507px;
  }
  @media (max-width: ${SIZE_LAPTOP_SMALL}px) {
    height: 407px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    height: 350px;
  }
`;

export const GlobalContainer = styled.div`
  padding-bottom: 133px;
  overflow: hidden;
  position: relative;
  &:after{
    content: ' ';
    background-color: #F5F6FA;
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1503px);
    z-index: -1;

    @media (max-width: ${600}px) {
      bottom: 200px;
      width: 2506px;
      left: calc(50% - 1250px);
    }

    @media (max-width: ${450}px) {
      width: 1606px;
      left: calc(50% - 800px);
    }
  }
  &:before{
    content: ' ';
    background: #FFFFFF;
    width: 100%;
    height: 1830px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    padding-bottom: 50px;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    /* padding-top: 139px; */
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    /* padding-top: 91px; */
  }
  
`;


export const Container = styled.div`
  margin: 0;
  width: 100%;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
  }

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
  }

`;

export const ClickBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
`;
