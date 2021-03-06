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
  getPxSize,
  SIZE_LAPTOP,
  SIZE_LAPTOP_SMALL,
  SIZE_MOBILE,

  HEADER_FONT_SIZE_DESCTOP_LARGE,
  HEADER_LINE_HEIGHT_DESCTOP_LARGE,
  HEADER_FONT_SIZE_DESCTOP_MEDIUM_1,
  HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  HEADER_FONT_SIZE_MOBILE,
  HEADER_LINE_HEIGHT_MOBILE,

  TEXT_FONT_SIZE_DESCTOP_LARGE,
  TEXT_LINE_HEIGHT_DESCTOP_LARGE,
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,
} from '../../../const/responsive';


export const GlobalContainer = styled.div`
  padding-top:185px;
  overflow: hidden;
  position: relative;
  &:after{
    content: ' ';
    background-color: #FFFFFF;
    width: 3006px;
    height: 2472px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1870px);
    z-index: -1;
  }
  &:before{
    content: ' ';
    background: #F5F6FA;
    width: 100%;
    height: 1830px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-top: 139px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-top: 91px;
  }
`;
export const Container = styled.div`
  margin:0 auto;
  display:flex;
  text-align: left;
  justify-content:space-between;
  letter-spacing:0 px;
  padding-right: 150px;
  padding-left:${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_LARGE}px`)};
  opacity:1;
  margin-bottom:225px;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    margin-bottom: 169px;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    .main-block button{
      margin: 0 auto;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    margin-bottom: 50px;
  }
`;

export const Slogan = styled.h1`
  text-align: left;
  line-height:${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  opacity:1;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  font-weight:700;
  margin: 0;
  white-space: pre-wrap;
  span {color: #52DE97;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
  }
`;

export const Discription = styled.p`
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height:${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  letter-spacing: 0px;
  color:#A09D9D;
  position:relative;
  z-index:2;
  margin-bottom:50px;
  max-width: 700px;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
  }
`;

export const Video = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${(props) => (props.alignImage === 'left' ? 'auto' : '150px')};
  top: 0;
  left: ${(props) => (props.alignImage === 'left' ? '150px' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignImage === 'left' ? 'flex-start' : 'flex-end')};
`;

export const VideoContainer = styled.div`
  width: 40%;
  height: 50%;
  margin:0;
  margin-top: -50px;
  margin-left: -25px;

  iframe {
    width: 600px;
    height: 600px;
    border: none;
    overflow: hidden;
    background-color: white;

    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      width: 500px;
      height: 500px;
    }
    @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
      width: 100%;
    }
    @media (max-width: ${getPxSize(SIZE_LAPTOP_SMALL)}) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 420px) {
      margin-left: -60px;
      width: 300px;
      height: 300px;
    }
  }

  video {
    display: none;
    width: auto;
    height: auto;
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      width: 100%;
    }
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    margin-top: 50px;
    margin-left: 0px;
    width: 70%;
  }
`;
export const VideoText = styled.div`
  margin:0 auto;
  text-align: center;
  max-width:1074px;
  font-size:${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height:${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  letter-spacing:0px;
  color:#2E293C;
  opacity:1;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
  }
`;

export const YouTubeVideo = styled.div`
  padding-top: 45px;
  padding-bottom: 88px;
  max-width: 1074px;
  height: 640px;
  margin: 0 auto;
  overflow:  hidden;
  iframe {
    border: none;
    border-radius: 10px;
    width: 100% !important;
    height: 100% !important;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    height: 350px !important;
  }
`;
