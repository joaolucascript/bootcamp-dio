import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .botaoMenu {
    font-size: 18px;
  }

  .botaoMenu:hover {
    color: #f0a500;
  }

  .btn {
    margin-left: 20px;
  }

  .btn-info {
    background-color: #f0a500;
    border-color: transparent;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .bg-info {
    background-color: #f0a500 !important;
  }

  .btn-check:focus + .btn-info,
  .btn-info:focus {
    color: #000;
    background-color: #f0a500;
    border-color: #f0a500;
    box-shadow: none;
  }
  @media (max-width: 650px) {
    height: 120px;

    .btn {
      margin-top: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  padding: 0 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .botaoMenu {
    padding: 0px 20px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
