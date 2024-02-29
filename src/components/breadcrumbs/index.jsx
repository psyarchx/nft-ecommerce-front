import React from 'react';
import styled from 'styled-components';
import * as S from './style';

const Breadcrumbs = () => {
  return (
    <S.BreadcrumbsContainer>
      <span>Home</span>
      <S.Separator>&gt;</S.Separator>
      <span>Product</span>
    </S.BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
