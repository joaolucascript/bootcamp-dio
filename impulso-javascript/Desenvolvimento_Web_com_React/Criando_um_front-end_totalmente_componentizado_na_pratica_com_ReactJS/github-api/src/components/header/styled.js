import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  input {
    min-width: 400px;
    width: 100%;
    border: 3px solid #6b697f;
    border-right: none;
    padding: 15px;
    height: 15px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #aba8cb;
  }

  input:focus {
    color: #dbd3ff;
  }

  button {
    width: 40px;
    height: 36px;
    border: 1px solid #6b697f;
    background: #6b697f;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #2b2a33;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
