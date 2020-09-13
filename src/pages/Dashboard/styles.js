import styled, { css, keyframes } from 'styled-components';

const slideFromTop = keyframes`
  0%{
    transform: translateY(-100%);
    visibility: hidden;
    opacity:0;
  }
  50%{
    transform: translateY(0);
    visibility: visible;
    opacity:  0.3;

  }
  100%{
    transform: translateY(0);
    visibility: visible;
    opacity:1;
  }
`;

export const Header = styled.header`
  transition: all 0.5s ease;
  background: #f04d22;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    transition: all 0.5s ease;
    flex: 1;
    display: flex;
    background: #fdfdfd;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    button {
      display: flex;
      align-items: center;
      padding: 7px;
      border: none;
      background: none;

      svg {
        color: #dfdfdf;
      }
    }

    input {
      flex: 1;
      background: none;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: none;
      height: 36px;
      font-size: 14px;
      color: #363636;
    }

    input:not([value='']) + button svg,
    input:focus + button svg {
      color: #363636;
    }
  }

  a {
    text-align: center;
    margin-left: 15px;
    padding-right: 15px;

    img {
      transition: all 0.5s ease;
      max-width: 150px;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    height: 80px;
  }

  @media (min-width: 1024px) {
    div {
      flex: 2;
    }
    a {
      flex: 1;

      img {
        max-width: 200px;
      }
    }
  }
`;

export const ControlsContainer = styled.div`
  background: #efefef;
  width: 100%;
  padding: 0 30px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  transition: all 0.5s ease;

  span {
    color: #9e9e9e;
    align-self: center;
  }

  nav {
    position: relative;

    > button {
      background: #363636;
      border: none;
      padding: 7px;
      color: #fdfdfd;
    }

    > div {
      position: absolute;
      visibility: hidden;
      right: 0;
      background: #666666;
      width: max-content;
      display: flex;
      flex-direction: column;
      transform: translateY(-100%);
      animation: ${props =>
        props.openOrderBy
          ? css`
              ${slideFromTop} 0.5s ease forwards
            `
          : 'none'};

      > button {
        text-align: end;
        background: none;
        border: none;
        text-transform: uppercase;
        color: #fdfdfd;
        padding: 9px;
        font-size: 14px;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 960px;
    width: 95%;
    margin: 0 auto;
  }
`;

export const BandList = styled.ul`
  max-width: 100%;
  width: 100%;
  transition: all 0.5s ease;

  @media (min-width: 1024px) {
    max-width: 960px;
    width: 95%;
    margin: 0 auto;
  }
`;

export const Band = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid #f4f4f4;

  img {
    max-width: 60px;
    height: auto;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    strong,
    span {
      text-transform: uppercase;
    }

    strong {
      color: #363636;
    }

    span {
      color: #9e9e9e;
    }
  }
`;

export const EmptyResults = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  padding: 0 30px;

  h2 {
    color: #9e9e9e;
    align-self: center;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    img {
      max-width: 200px;
      width: 100%;
      height: auto;
    }
  }
`;
