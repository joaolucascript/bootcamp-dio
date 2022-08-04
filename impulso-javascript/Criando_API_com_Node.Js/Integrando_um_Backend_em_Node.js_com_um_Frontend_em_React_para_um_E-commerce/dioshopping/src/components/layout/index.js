import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../header";
import { ResetCSS } from "../../global/resetCSS";
import Routes from "../../routes";
import * as S from "./styled";

const Layout = () => {
  return (
    <>
      <ResetCSS />
      <S.Container>
        <Router>
          <Header />
          <Routes />
        </Router>
      </S.Container>
    </>
  );
};

export default Layout;
