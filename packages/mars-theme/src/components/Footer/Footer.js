/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'frontity';
import Link from '../link';
import Subscribe from '../Subscribe';
import {
  GlobalContainer,
  Container,
  MenuContainer,
  MenuColumnHeader,
  SubMenuContainer,
  SubMenuElement,
  MenuColumn,
  FooterActions,
  Socials,
  SocialsHeader,
  SocialsRow,

} from './styles';

const Footer = ({
  state, libraries, bgColor = '#FFFFFF', circleColor = '#FFFFFF',
}) => {
  const dataP = state.source.get(state.router.link);

  const {
    menu = [],
    // eslint-disable-next-line no-unused-vars
    subscribe = '',
    tw = '#',
    lin = '#',
    fb = '#',
  } = state.seatbackapi.options.acf;

  const Html2React = libraries.html2react.Component;

  const expraColors = {};
  if (
    dataP && (
      dataP.route === '/challenges-incentives/' ||
      dataP.route === '/gamitification/' ||
      dataP.route === '/motivators/'
    )
    && state.seatbackapi.windowSize <= 600
  ) {
    expraColors.bgColor = '#F5F6FA';
    expraColors.circleColor = '#FFFFFF';
  }

  return (
    <GlobalContainer
      bgColor={expraColors.bgColor ? expraColors.bgColor : bgColor}
      circleColor={expraColors.circleColor ? expraColors.circleColor : circleColor}
    >
      <Container>
        {menu && menu.length > 0 && (
          <MenuContainer>
            {menu.map((i, key) => (
              <MenuColumn key={key}>
                <MenuColumnHeader>
                  {i.link && i.link.length > 0 ? (
                    <Link link={i.link}><Html2React html={i.name} /></Link>
                  ) : (
                    <Html2React html={i.name} />
                  )}
                </MenuColumnHeader>
                {i.sub_menu && i.sub_menu.length > 0 && (
                <SubMenuContainer>
                  {i.sub_menu.map((subI, j) => (
                    <SubMenuElement key={j}>
                      <Link link={subI.link.url.replace(state.frontity.adminUrl, state.frontity.url)}>
                        <Html2React html={subI.link.title} />
                      </Link>
                    </SubMenuElement>
                  ))}
                </SubMenuContainer>
                )}
              </MenuColumn>
            ))}
          </MenuContainer>
        )}
        <FooterActions>
          <Subscribe />
          <Socials>
            <SocialsHeader>Follow us</SocialsHeader>
            <SocialsRow>
              {lin.length > 0 && (
                <Link link={lin}>
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="svgBg" d="M29 57.5C44.7401 57.5 57.5 44.7401 57.5 29C57.5 13.2599 44.7401 0.5 29 0.5C13.2599 0.5 0.5 13.2599 0.5 29C0.5 44.7401 13.2599 57.5 29 57.5Z" stroke="#52DE97" />
                    <path d="M23.48 25.64H19.33V39H23.48V25.64Z" fill="#2E293C" />
                    <path d="M21.41 23.81C20.9329 23.812 20.466 23.6723 20.0684 23.4087C19.6707 23.1451 19.3603 22.7694 19.1763 22.3292C18.9924 21.889 18.9432 21.4041 19.0351 20.936C19.1269 20.4678 19.3557 20.0375 19.6923 19.6994C20.029 19.3614 20.4584 19.1309 20.9261 19.0371C21.3939 18.9433 21.879 18.9904 22.3199 19.1725C22.7609 19.3546 23.1379 19.6635 23.4031 20.06C23.6684 20.4566 23.81 20.9229 23.81 21.4C23.81 22.0374 23.5575 22.6489 23.1077 23.1006C22.6579 23.5523 22.0474 23.8074 21.41 23.81V23.81Z" fill="#2E293C" />
                    <path d="M39 39H34.88V32.5C34.88 30.95 34.88 28.96 32.72 28.96C30.56 28.96 30.23 30.65 30.23 32.39V39H26.08V25.64H30.08V27.46C30.4801 26.7804 31.0566 26.2217 31.7485 25.8431C32.4404 25.4646 33.2218 25.2804 34.01 25.31C38.21 25.31 39.01 28.07 39.01 31.67L39 39Z" fill="#2E293C" />
                  </svg>
                </Link>
              )}
              {fb.length > 0 && (
                <Link link={fb}>
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="svgBg" d="M29 57.5C44.7401 57.5 57.5 44.7401 57.5 29C57.5 13.2599 44.7401 0.5 29 0.5C13.2599 0.5 0.5 13.2599 0.5 29C0.5 44.7401 13.2599 57.5 29 57.5Z" stroke="#52DE97" />
                    <path d="M34.39 22.32H32.5C31.03 22.32 30.74 23.02 30.74 24.05V26.32H34.26V29.88H30.74V39H27.07V29.88H24V26.32H27.07V23.7C27.07 20.7 28.93 19 31.64 19H34.39V22.32Z" fill="black" />
                  </svg>
                </Link>
              )}
              {tw.length > 0 && (
                <Link link={tw}>
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="svgBg" d="M29 57.5C44.7401 57.5 57.5 44.7401 57.5 29C57.5 13.2599 44.7401 0.5 29 0.5C13.2599 0.5 0.5 13.2599 0.5 29C0.5 44.7401 13.2599 57.5 29 57.5Z" stroke="#52DE97" />
                    <path d="M41.53 21.53C40.867 22.5243 40.0344 23.3942 39.07 24.1C39.07 24.3 39.07 24.49 39.07 24.69C39.07 27.2548 38.3803 29.7723 37.073 31.9789C35.7657 34.1855 33.889 35.9999 31.6395 37.232C29.3901 38.4641 26.8507 39.0685 24.2874 38.982C21.7241 38.8954 19.2312 38.121 17.07 36.74C17.0562 36.7355 17.0434 36.7283 17.0323 36.7188C17.0213 36.7093 17.0123 36.6977 17.0058 36.6846C16.9992 36.6716 16.9954 36.6574 16.9944 36.6429C16.9934 36.6284 16.9953 36.6138 17 36.6C17.0088 36.5728 17.0262 36.5492 17.0497 36.533C17.0732 36.5167 17.1015 36.5086 17.13 36.51C17.5181 36.5582 17.9089 36.5816 18.3 36.58C20.4061 36.5888 22.4597 35.9229 24.16 34.68C23.1548 34.5934 22.1975 34.2123 21.4077 33.5845C20.618 32.9566 20.031 32.1098 19.72 31.15C19.7103 31.1182 19.7132 31.0838 19.7281 31.0541C19.743 31.0243 19.7687 31.0014 19.8 30.99C19.8 30.99 19.8 30.99 19.86 30.99C20.4227 31.0849 20.9973 31.0849 21.56 30.99C20.5291 30.6602 19.6292 30.0122 18.9896 29.139C18.3499 28.2658 18.0035 27.2124 18 26.13V26.07C17.9924 26.0473 17.9924 26.0227 18 26C18.0185 25.9904 18.0391 25.9853 18.06 25.9853C18.0809 25.9853 18.1015 25.9904 18.12 26C18.6715 26.3037 19.2754 26.5005 19.9 26.58C18.9477 25.8067 18.304 24.7177 18.0856 23.5105C17.8673 22.3033 18.0888 21.0579 18.71 20C18.7209 19.9835 18.7358 19.97 18.7533 19.9606C18.7707 19.9512 18.7902 19.9463 18.81 19.9463C18.8298 19.9463 18.8493 19.9512 18.8667 19.9606C18.8842 19.97 18.8991 19.9835 18.91 20C20.1347 21.4973 21.6546 22.7264 23.3751 23.6107C25.0955 24.495 26.9796 25.0156 28.91 25.14C28.6974 24.0566 28.8407 22.9335 29.3185 21.9382C29.7963 20.9429 30.5831 20.1288 31.5614 19.6171C32.5397 19.1055 33.6572 18.9237 34.7473 19.0991C35.8373 19.2744 36.8415 19.7974 37.61 20.59C38.6874 20.3709 39.7213 19.9756 40.67 19.42C40.6803 19.4091 40.6927 19.4004 40.7064 19.3945C40.7202 19.3886 40.735 19.3855 40.75 19.3855C40.765 19.3855 40.7798 19.3886 40.7936 19.3945C40.8073 19.4004 40.8197 19.4091 40.83 19.42C40.8372 19.4357 40.8409 19.4527 40.8409 19.47C40.8409 19.4873 40.8372 19.5043 40.83 19.52C40.5078 20.5247 39.8825 21.4049 39.04 22.04C39.8324 21.9015 40.6048 21.6664 41.34 21.34C41.3597 21.3237 41.3845 21.3149 41.41 21.3149C41.4355 21.3149 41.4603 21.3237 41.48 21.34C41.4947 21.3604 41.5025 21.3849 41.5025 21.41C41.5025 21.4351 41.4947 21.4596 41.48 21.48L41.53 21.53Z" fill="black" />
                  </svg>
                </Link>
              )}
            </SocialsRow>
          </Socials>
        </FooterActions>
      </Container>
    </GlobalContainer>
  );
};

export default connect(Footer);
