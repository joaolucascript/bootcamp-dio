import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/index";
import * as S from "./styled";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <h1>Dio Shopping</h1>
        <div>
          <Link to="/" className="botaoMenu">
            Home
          </Link>
          <Link to="/contato" className="botaoMenu">
            Contato
          </Link>
          <Cart />
        </div>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
