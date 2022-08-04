import styled from "styled-components";

export const Container = styled.body`
  background-color: #171717;
`;

export const ProdutosContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 20px 0;

  .makeStyles-root-1 {
    flex-wrap: wrap;
    flex-grow: 2;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 280px;
  width: 20%;
  height: max-content;
  background-color: white;
  border-radius: 16px;
  margin: 14px 0 0 10px;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 50%;
  }
`;

export const Categorias = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;

  h2 {
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .MuiListItem-gutters {
    padding: 0;
  }

  .MuiTypography-body1 {
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
  }

  .MuiTypography-body2 {
    font-size: 14px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
  }
`;

export const Produtos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  height: max-content;

  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiTypography-h6 {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    line-height: 1.15;
    margin-top: 10px;
  }

  .MuiTypography-subtitle1 {
    font-family: "Nunito", sans-serif;
  }

  .MuiButton-contained {
    margin-top: 10px;
    color: white;
    box-shadow: none;
    background-color: #171717;
  }

  .MuiButton-contained:hover {
    background-color: #f0a500;
  }

  .MuiGrid-grid-xs-3 {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: unset;
    flex-wrap: wrap;
  }

  .MuiGrid-spacing-xs-3 > .MuiGrid-item {
    padding: 10px;
  }
`;

//  --------------- Contato ---------------
export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  min-height: 100vh;
  padding: 20px 10px;
  align-content: center;

  .formContainer {
    display: flex;
    flex-direction: column;
    margin: 10px auto 20px auto;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
  }
  label {
    color: white;
  }

  /* Input */
  .MuiInputBase-root {
    color: white;
    cursor: text;
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
  }

  .MuiFormLabel-root.Mui-focused {
    color: white;
  }

  .MuiInputBase-input {
    color: white;
  }

  .MuiInput-underline::before {
    border-bottom: 1px solid white;
  }

  .MuiInput-underline::after {
    border-bottom: 2px solid white;
  }

  /* Botão */
  .MuiButton-label {
    display: flex;
    justify-content: center;
  }

  .MuiButton-containedPrimary {
    background-color: blue;
  }

  .MuiButton-root {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    background-color: white;
    color: black;
    width: 100%;
    height: 60px;
  }

  .MuiButton-root:hover {
    background-color: #f0a500;
  }

  /* Cards Mensagens */
  .cards {
    display: flex;
    flex-wrap: wrap;
    min-width: content;
    flex-direction: row;
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    padding: 20px 0;
    border-radius: 8px;
  }

  .card {
    margin: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .card-body {
    /* background-color: blue; */
  }
`;
