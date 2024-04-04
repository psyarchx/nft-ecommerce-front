
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.div`
  background-color: #00a9bf;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Search...'
})`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 5px 0px 0px 5px;
`;

export const SearchButton = styled.button`
  height: 40px;
  padding: 5px 10px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
  background-color: white;
  color: black;

  &:hover {
    background-color: #008a9e;
  }
`;

export const CustomSearch = styled(FontAwesomeIcon)`
  color: black;
`;

export const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
`;

export const CustomIconSearchBar = styled(FontAwesomeIcon)`
  color: black;
  cursor: pointer;
`;

export const CustomIconLinks = styled(FontAwesomeIcon)`
  margin-right: 8px;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const MidNavIcon = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid white;
  border-left: 1px solid white;
  padding: 0 20px;
  cursor: pointer;
`;

export const LinkText = styled.span`
  color: white;
  cursor: pointer;
`;