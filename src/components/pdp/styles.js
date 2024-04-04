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
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const BuyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  width: 60%;
  border-radius: 5px;
  margin: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: red;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const DescripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  max-width: 500px;
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