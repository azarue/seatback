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
  SIZE_MOBILE,
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,
} from '../../../const/responsive';


export const Container = styled.div`
  padding-top: 180px;
  padding-bottom: 227px;
  padding-right: ${PADDING_DESCTOP_LARGE}px;
  padding-left: ${PADDING_DESCTOP_LARGE}px;
  position: relative;
  width: 100%;
  background: #FFFFFF;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_2}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_2}px;
  }

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    padding-left: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-right: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-top: ${PADDING_DESCTOP_MEDIUM_1}px;
    padding-bottom: ${PADDING_DESCTOP_MEDIUM_1}px;
  }
  
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-left: ${PADDING_DESCTOP_SMALL}px;
    padding-right: ${PADDING_DESCTOP_SMALL}px;
    padding-top: 30px;
    padding-bottom: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_LAPTOP)}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding-top: 0;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    padding-left: ${PADDING_MOBILE}px;
    padding-right: ${PADDING_MOBILE}px;
    padding-top: 0;
    padding-bottom: 30px;
  }
`;


export const Blocks = styled.div`
  padding-top: 180px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    padding-top: 30px;
    &:first-child {
      padding-top: 0;
    }
  }
`;

export const Block = styled.div`
  padding-left: 13px;
  padding-right: 13px;
  width: 33%;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    width: 50%;
    margin-top: 100px;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    width: 100%;
  }
`;

export const BlockContent = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000014;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Icon = styled.div`
  width: 110px;
  height: 110px;
  background: #52DE97 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -55px;
  left: calc(50% - 55px);
  font-size: 34px;
  line-height: 136px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  @media (max-width: ${SIZE_MOBILE}px) {
    transform: scale(0.7);
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #A09D9D;
  opacity: 1;
  padding: 95px 10px 45px 10px;
  width: 100%;
  height: 100%;
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_SMALL)}) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    margin-bottom: 35px;
    padding: 55px 5px 25px 5px;
  }
`;
