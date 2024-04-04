import React from 'react';
import * as S from './style';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = () => {
  return (
    <S.BreadcrumbsContainer>
      <S.HomeWrapper>
        <S.HomeIcon icon={faHome} />
        <span>Home</span>
      </S.HomeWrapper>
      <S.Separator>&gt;</S.Separator>
      <span>Product</span>
    </S.BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
