import React from "react";
import * as S from  "./style";

const Navbar = () => {
    return (
        <S.HeaderContainer>
        <S.Logo>NFT Marketplace</S.Logo>
        <S.NavLinks>
            <S.NavLink>Home</S.NavLink>
            <S.NavLink>About</S.NavLink>
            <S.Dropdown>
            <S.NavLink>Services</S.NavLink>
            <S.DropdownContent>
                <S.DropdownLink>For Buyers</S.DropdownLink>
                <S.DropdownLink>For Sellers</S.DropdownLink>
            </S.DropdownContent>
            </S.Dropdown>
            <S.NavLink>Contact</S.NavLink>
        </S.NavLinks>
        </S.HeaderContainer>
    );
}

export default Navbar;
    