// SuccessPage.js
import React from 'react';
import * as S from './style';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SuccessPage = () => {
  return (
    <S.SuccessMessageContainer>
      <S.CheckSign icon={faCheckCircle} />
      <S.SuccessMessage>Compra efetuada com sucesso</S.SuccessMessage>
      <S.OpenSeasLink href="https://testnets.opensea.io">Visualize seu token na OpenSeas</S.OpenSeasLink>
    </S.SuccessMessageContainer>
  );
};

export default SuccessPage;
