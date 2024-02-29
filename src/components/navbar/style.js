
import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #00a9bf;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.li`
  margin-left: 20px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #00a9bf;
  padding: 10px;
  top: 100%;
  left: 0;
  z-index: 1;
`;

export const DropdownLink = styled.a`
  display: block;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;