import { styled } from 'frontity';
import {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  SIZE_DESCTOP_SMALL,
  SIZE_LAPTOP,
  SIZE_MOBILE,
} from '../../../const/responsive';

export const ItemBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  width: 50%;

  @media (max-width: ${SIZE_LAPTOP}px) {
    width: 100%;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const ItemContentBox = styled.div`
  height: 562px;
  width: 100%;
  background-image: ${(props) => (props.background ? `url(${props.background})` : '')};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  border-radius: 14px 14px 17px 17px;

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    height: 500px;
  }
  @media (max-width: ${SIZE_LAPTOP}px) {
    height: 430px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    height: 380px;
    border-radius: 8px 8px 8px 8px;
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

export const ItemDescriptionBox = styled.div`
  min-height: 178px;
  height: auto;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 8px #00000014;
  border-radius: 0px 0px 14px 14px;
  opacity: 1;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: ${SIZE_MOBILE}px) {
    border-radius: 0px 0px 7px 7px;
    padding: 16px;
    min-height: auto;
  }
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding-right: 100px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: ${SIZE_MOBILE}px) {
      padding-right: 40px;      
    }
  }

  h2 {
    text-align: left;
    letter-spacing: 0px;
    color: #2e293c;
    opacity: 1;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    margin: 0;
    padding-top: 12px;
    width: 100%;

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 22px;
      line-height: 26px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 14px;
      line-height: 24px;
      order: 2;
      color: #2E293C;
      font-weight: bold;
      padding-top: 8px;
    }

    a {
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #52de97;
      }
    }
  }

  p {
    width: 100%;
    text-align: left;
    letter-spacing: 0px;
    color: #2e293c;
    opacity: 1;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin: 0;
    padding-top: 12px;

    @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
      font-size: 17px;
      line-height: 22px;
    }
    @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: ${SIZE_MOBILE}px) {
      font-size: 12px;
      line-height: 15px;
      order: 1;
      padding-top: 0;
    }
  }
`;
export const Date = styled.time`
  width: 100%;
  text-align: left;
  display: block;
  width: 100%;
  margin: 0;
  padding-top: 12px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  letter-spacing: 0.64px;
  color: #a09d9d;
  opacity: 1;

  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 12px;
    line-height: 15px;
    order: 3;
    color: #2E293C;
    padding-top: 38px;
  }
`;
export const Author = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 320px;
  @media (max-width: ${SIZE_MOBILE}px) {
    bottom: 0;
  }
`;
export const AuthorName = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  text-align: right;
  letter-spacing: 0px;
  color: #2e293c;
  opacity: 1;
  padding-top: 14px;

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: ${SIZE_DESCTOP_MEDIUM_1}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${SIZE_MOBILE}px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
export const AuthorImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${(props) => (props.background ? `url(${props.background})` : '')};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-left: auto;

  @media (max-width: ${SIZE_MOBILE}px) {
    width: 50px;
    height: 50px;
    display: none;
  }
`;
