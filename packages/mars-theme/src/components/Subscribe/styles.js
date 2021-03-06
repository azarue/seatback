import { styled, css } from 'frontity';
import {
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_MOBILE,
  TEXT_FONT_SIZE_MOBILE,
  TEXT_LINE_HEIGHT_MOBILE,
  TEXT_FONT_SIZE_DESCTOP_MEDIUM_1,
  TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1,
  getPxSize,
} from '../../const/responsive';

export const Main = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.div`
  text-align: left;
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  opacity: 1;
  white-space: pre-wrap;

  span {
    color: #52DE97;
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    white-space: normal;
  }
  @media (max-width: ${getPxSize(SIZE_MOBILE)}) {
    font-size: 14px;
    line-height: 14px;
  }
`;
export const FormContainer = styled.form`
  position: relative;
  display: flex;
  max-width: 700px;
  ${(props) => props.preload && css`
    &:after{
      content: ' ';
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: url(https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif) no-repeat 50% 50%, rgba(255, 255, 255, 0.4);
    }
  `}
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FText = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: #A09D9D;
  transition: 0.2s ease all;
  font-size:0px;
  opacity: 0;

  ${(props) => props.afterload && css`
    font-size: 16px;
    opacity: 1;
  `}

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    justify-content: center;
  }
`;
export const FormControl = styled.div`
  margin-top: 40px;
  align-items: center;
  width: 474px;
  max-width: 100%;
  flex: 1;

  ${(props) => props.error && css`
    label {
      color: red;
      span {
        color: red;
      }
    }
    input {
      background-color: #ffebeb;
    }
  `}

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    margin-top: 25px;
    width: 100%;
  }
  
  @media (max-width: ${SIZE_MOBILE}px) {
    margin-top: 20px;
  }
`;

export const FormLabel = styled.label`
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color:#2E293C;
  opacity: 1;
  padding-bottom: 15px;
  display: block;
  transition: all 0.3s ease-in-out;
  span {
    color: #A09D9D;
    font-weight: 400;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
  }
`;

export const FormInput = styled.input`
  height: 58px;
  width: 100%;
  max-width: 474px;
  border: 1px solid #52DE97;
  border-radius: 29px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-left:32px;
  padding-right:32px;
  outline: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: #fffce3;
  }

  &::placeholder {
    color: #2E293C;
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    height: 52px;
    padding-left:25px;
    padding-right:25px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
      line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    }
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    height: 45px;
    padding-left:20px;
    padding-right:20px;
    border-radius: 8px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_MOBILE}px;
      line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    }
  }
`;

export const FormShare = styled.div`
  height: 176px;
  width: 954px;
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-top:32px;
  padding-left:32px;
`;
export const BBlock = styled.div`
  width:219px;
  padding-top: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    padding-top: 35px;
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    margin: 0;
    padding-top: 20px;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 176px; 
  border: 1px solid #52DE97;
  border-radius: 10px;
  opacity: 1;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0 px;
  color: #A09D9D;
  opacity: 1;
  padding-left:32px;
  outline: none;
  background-color: white;
  transition: all 0.3s ease-in-out;
  padding: 32px;

  &:focus {
    background-color: #fffce3;
  }

  &::placeholder {
    color: #A09D9D;
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
    line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    height: 60px;

    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_DESCTOP_MEDIUM_1}px;
      line-height: ${TEXT_LINE_HEIGHT_DESCTOP_MEDIUM_1}px;
    }
  }

  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: ${TEXT_FONT_SIZE_MOBILE}px;
    line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    height: 45px;
    padding: 20px;
    &::placeholder {
      font-size: ${TEXT_FONT_SIZE_MOBILE}px;
      line-height: ${TEXT_LINE_HEIGHT_MOBILE}px;
    }
  }

`;
