import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  margin: auto;
  max-width: 1280px;
  width: 1280px;
`;

export const ProductImage = styled.img`
  width: 770px;
  height: 530px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: justify;
  color: #454545;
`;

export const BuyButton = styled.button`
  background-color: #00a9bf;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  width: 60%;
  border-radius: 5px;
  margin: auto;

  &:hover {
    background-color: #008a9e;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #454545;
`;

export const DescripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  color: #454545;
`;

export const BrandText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

export const PriceBefore = styled.p`
  font-size: 16px;
  text-decoration: line-through;
  margin-bottom: 5px;
  color: #454545;
`;

export const Unities = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #454545;
  font-weight: bold;
`;