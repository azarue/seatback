import { styled } from 'frontity';
import {
  PADDING_DESCTOP_MEDIUM_2,
  PADDING_DESCTOP_MEDIUM_1,
  PADDING_DESCTOP_SMALL,
  PADDING_MOBILE,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  getPxSize,
  SIZE_LAPTOP,
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
  WIDTH_DESCRIPTION_SIDE_LARGE,
  WIDTH_DESCRIPTION_SIDE_MEDIUM_1,
} from '../../../const/responsive';

export const GlobalContainer = styled.div`
  background: #f5f6fa 0% 0% no-repeat padding-box;
  position: relative;
  background-color: #f5f6fa;
  overflow: hidden;
  padding-bottom: 70px;
  &:after {
    content: " ";
    background-color: #f5f6fa;
    width: 3006px;
    height: 2450px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1110px);
    z-index: 1;
  }
  &:before {
    content: " ";
    background: #ffffff;
    width: 100%;
    height: 1272px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 0;
  }
`;
export const Container = styled.div`
  padding-top: 205px;
  padding-bottom: 205px;
  padding-right: 150px;
  padding-left: ${(props) => (props.alignImage === 'left' ? '49%' : '150px')};
  position: relative;
  width: 100%;
  z-index: 2;

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_MEDIUM_2}px`)};
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${(props) => (props.alignImage === 'left' ? '50%' : `${PADDING_DESCTOP_MEDIUM_1}px`)};
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_1}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    padding-top: 120px;
    padding-bottom: 0;
    justify-content: flex-start;
    text-align: left;
    display: flex;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  text-align: left;
  font-size: ${HEADER_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${HEADER_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #2e293c;
  opacity: 1;
  position: relative;
  z-index: 2;
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left'
    ? '100%'
    : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${HEADER_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${HEADER_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${HEADER_FONT_SIZE_MOBILE}px;
    line-height: ${HEADER_LINE_HEIGHT_MOBILE}px;
    text-align: left;
    font-weight: 700;
    order: 0;
    padding-bottom: 0;
    width: 100%;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding-top: 15px;
  text-align: left;
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2e293c;
  opacity: 1;
  position: relative;
  z-index: 2;
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left'
    ? '100%'
    : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${14}px;
    line-height: ${24}px;
    margin-bottom: 0;
    padding-top: 10px;
    order: 1;
    text-align: left;
    
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: ${TEXT_FONT_SIZE_DESCTOP_LARGE}px;
  line-height: ${TEXT_LINE_HEIGHT_DESCTOP_LARGE}px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #a09d9d;
  max-width: ${WIDTH_DESCRIPTION_SIDE_LARGE}px;
  margin: 0;
  position: relative;
  z-index: 2;
  @media (max-width: 1800px) {
    max-width: ${(props) => (props.alignImage === 'left'
    ? '100%'
    : `${WIDTH_DESCRIPTION_SIDE_MEDIUM_1}%`)};
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${14}px;
    line-height: ${24}px;
    margin-bottom: 40px;
    text-align: left;
    order: 2;
  }
`;

export const Action = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 2;
  order: 6;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    & button {
      margin: 0 auto;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    width: 100%;
    & button {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const Image = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: ${(props) => (props.alignImage === 'left' ? 'auto' : '150px')};
  left: ${(props) => (props.alignImage === 'left' ? '150px' : 'auto')};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignImage === 'left' ? 'flex-start' : 'flex-end')};

  @media (max-width: 1800px) {
    & img{
      width: 550px;
    }
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    right: ${(props) => (props.alignImage === 'left' ? 'auto%' : `${PADDING_DESCTOP_MEDIUM_2}px`)};
    left: ${(props) => (props.alignImage === 'left' ? `${PADDING_DESCTOP_MEDIUM_2}px` : 'auto')};
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    right: ${(props) => (props.alignImage === 'left' ? 'auto%' : `${PADDING_DESCTOP_MEDIUM_1}px`)};
    left: ${(props) => (props.alignImage === 'left' ? `${PADDING_DESCTOP_MEDIUM_1}px` : 'auto')};
    & img{
      width: 500px;
    }
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    right: 0;
    left: 0;
    position: relative;
    width: 100%;
    & img{
      width: 480px;
      margin: 0 auto;
    }
    & img.card1{
      left: calc(50% - 240px);
      right: auto;
    }
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    order: 4;
    right: 0px;
    left: 0px;
    & img{
      width: 100%;
    }
    & img.card1{
      left: 0px;
      right: 0px;
    }
  }
`;

export const DescriptionBox = styled.div`
    @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
      order: 3;
      padding-top: 20px;
    }
`;
