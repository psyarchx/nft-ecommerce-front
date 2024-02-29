import React from 'react';
import * as S from './styles';
import phoneImage from '../../assets/phone.png';

const ProductPage = () => {
  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <S.ProductImage src={phoneImage} alt="Product Image" />
      </S.ImageContainer>
      <S.DescripsContainer>
        <S.ProductTitle>Iphone pro max dos caralho celular horrivel da porra</S.ProductTitle>
        <S.BrandText>Marca: Apple</S.BrandText>
        <S.Divider />
        <S.ProductPrice>Preço: $99.99</S.ProductPrice>
        <S.ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet
          semper nunc, id tincidunt nisl faucibus sed.
        </S.ProductDescription>
        <S.Divider />
        <S.BuyButton>Buy</S.BuyButton>
      </S.DescripsContainer>
    </S.ProductContainer>
  );
};

export default ProductPage;
