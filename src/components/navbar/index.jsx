import React from "react";
import * as S from  "./style";
import { faSearch, faList, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <S.HeaderContainer>
            <S.Logo>NFT Marketplace</S.Logo>
            <S.SearchBarContainer>
                <S.SearchInput />
                <S.SearchButton><S.CustomIconSearchBar icon={faSearch}/></S.SearchButton>
            </S.SearchBarContainer>
            <S.NavLinks>
                <S.NavIcon><S.CustomIconLinks icon={faList}/><S.LinkText>Pedidos</S.LinkText></S.NavIcon>
                <S.MidNavIcon><S.CustomIconLinks icon={faUser}/><S.LinkText>Conta</S.LinkText></S.MidNavIcon>
                <S.NavIcon><S.CustomIconLinks icon={faShoppingCart}/></S.NavIcon>
            </S.NavLinks>
        </S.HeaderContainer>
    );
}

export default Navbar;
    