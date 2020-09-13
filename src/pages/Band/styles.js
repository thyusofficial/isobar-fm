import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(90deg);
  }
`;

export const Header = styled.header`
  transition: all 0.5s ease;
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 30px;
  background: ${transparentize(0.2, '#f04d22')};
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    svg {
      color: #fdfdfd;
    }

    img {
      max-width: 150px;
      width: 100%;
      height: auto;
    }

    &:nth-child(2) {
      flex: 1;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const Title = styled.section`
  background-image: url(${props => props.background});
  background-size: cover;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-position: 50%;

  height: 40vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    transition: all 0.5s ease;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }
`;

export const About = styled.section`
  transition: all 0.5s ease;
  max-width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 30px;

    strong {
      transition: all 0.5s ease;
      text-transform: uppercase;
      color: #9e9e9e;
      font-size: 13px;
      text-align: center;
    }

    img {
      transition: all 0.5s ease;
      position: absolute;
      bottom: -80%;
      left: 50%;
      margin-left: -40px;
      max-width: 80px;
      height: auto;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.125) 0px 2px 5px;
    }
  }

  p {
    max-height: ${props => (props.openBiography ? '100vh' : '25vh')};
    overflow: hidden;
    text-align: justify;
    transition: all 0.5s ease;

    mask-image: ${props =>
      props.openBiography
        ? 'none'
        : 'linear-gradient(to bottom, black 50%, transparent 100%)'};
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;

    span {
      flex: 1;
      height: 2px;
      background: #f4f4f4;
    }

    svg {
      margin: 0 20px;
      animation: ${rotate} 0.5s linear;
    }
  }

  @media (min-width: 768px) {
    > div {
      strong {
        font-size: 15px;
      }

      img {
        max-width: 150px;
        margin-left: -75px;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 960px;
    width: 95%;
    margin: 0 auto;
  }
`;

export const Albums = styled.section`
  transition: all 0.5s ease;
  width: 100%;
  max-width: 100%;

  h4 {
    margin: 15px 0;

    text-align: center;
    text-transform: uppercase;
    color: #363636;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    max-width: 960px;
    width: 95%;
    margin: 0 auto;
  }
`;

export const AlbumCard = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 0.5s ease;

    span {
      display: none;
      align-self: flex-end;
      font-size: 14px;
      color: #fdfdfd;
    }

    &:hover {
      background: ${transparentize(0.55, '#f04d22')};
      display: flex;
      padding: 7px;

      span {
        display: block;
      }
    }
  }

  @media (min-width: 768px) {
    div:hover span {
      font-size: 16px;
    }
  }
`;
