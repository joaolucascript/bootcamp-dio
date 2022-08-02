import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(event) => setusernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <svg
            fill="#2a2831"
            width="60%"
            height="60%"
            viewBox="0 0 124.524 124.524"
          >
            <path
              d="M51,102.05c10.5,0,20.2-3.2,28.3-8.6l29.3,29.3c2.301,2.3,6.101,2.3,8.5,0l5.7-5.7c2.3-2.3,2.3-6.1,0-8.5L93.4,79.35
              c5.399-8.1,8.6-17.8,8.6-28.3c0-28.1-22.9-51-51-51c-28.1,0-51,22.9-51,51C0,79.149,22.8,102.05,51,102.05z M51,20.05
              c17.1,0,31,13.9,31,31c0,17.1-13.9,31-31,31c-17.1,0-31-13.9-31-31C20,33.95,33.9,20.05,51,20.05z"
            />
          </svg>
        </button>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
