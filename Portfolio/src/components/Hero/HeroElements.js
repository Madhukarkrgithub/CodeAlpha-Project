import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

 export const HeroContainer = styled.div`
// border:1px solid orange;
  padding-bottom: 6rem;
  padding-top: 8rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  padding-top:70px;
  flex-direction: row;
  gap:5%;
  margin-bottom: 10px;
  // border:1px solid red;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
// border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
//  border: 1px solid red;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    width:100%
  }
`;

export const Image = styled.img`
border-radius: 10%;
// box-shadow: rgba(134, 38, 230, 0.6) 0px 0px 20px -5px; 
width: 65%;
border: 1px solid #854ce6;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
    
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;
 

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
    
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;
  // box-shadow: rgba(130, 35, 216, 0.9) 0px 7px 29px 0px;
  transform: scale(1.05);
  // transition: all 0.2s ease-in-out !important;
  // border: 1px solid red;

  @media screen and (max-width:820px){
    margin:auto;
    margin-top:70px;
}
  
`
;
