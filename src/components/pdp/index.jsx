import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed for HTTP requests
import * as S from './styles';
import phoneImage from '../../assets/phone.png';
import LoadingOverlay from '../LoadingOverlay';
import { useEffect } from 'react';

const ProductPage = ({ setMintSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [serialNumber, setSerialNumber] = useState('');

  const productDetails = {
    name: "Lumixar - AstraZen 5G, dual camera, 128GB, Dual SIM, 6.5'",
    brand: "Lumixar",
    priceBefore: "999.99",
    priceNow: "799.99",
    un: 1,
    description: "O Lumixar AstraZen 5G combina elegância e tecnologia de ponta com sua dupla câmera de alta definição, 128GB de armazenamento e suporte Dual SIM. Sua tela de 6.5 polegadas proporciona uma experiência visual imersiva, enquanto a conectividade 5G garante velocidade ultrarrápida, mantendo você sempre conectado. Ideal para aqueles que valorizam desempenho, capacidade de armazenamento e a conveniência de gerenciar duas linhas em um único aparelho, o AstraZen 5G redefine o que esperamos de um smartphone moderno.",
    serialNumber: serialNumber
  };

  const createRandomSerialNumber = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let serialNumber = '';

    for (let index = 0; index < 4; index++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      serialNumber += chars[randomIndex];
    }

    serialNumber += '-';
    const middleIndex = Math.floor(Math.random() * chars.length);
    serialNumber += chars[middleIndex];
    serialNumber += '-';

    for (let index = 0; index < 4; index++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      serialNumber += chars[randomIndex];
    }

    return serialNumber;
  }

  useEffect(() => {
    setSerialNumber(createRandomSerialNumber());
  }, []);

  const handlePurchase = async () => {
    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('name', productDetails.name);
    formData.append('description', productDetails.description);
    formData.append('price', productDetails.priceNow);
    formData.append('serialNumber', serialNumber);
    formData.append('owner', 'John Doe');

    try {
      const imageResponse = await fetch(phoneImage);
      if (!imageResponse.ok) throw new Error('Failed to fetch image');
      
      const imageBlob = await imageResponse.blob();
      
      const imageFile = new File([imageBlob], 'phoneImage.png', { type: 'image/png' });
      
      formData.append('image', imageFile);
  
      const response = await axios.post('http://localhost:3001/api/mint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data);
      setMintSuccess(true);
    } catch (error) {
      console.error('There was an error processing the purchase:', error);
      setMintSuccess(false);
      setError(true);
    }
  };

  return (
    <>
      <S.ProductContainer>
        <S.ImageContainer>
          <S.ProductImage src={phoneImage} alt="Product Image" />
        </S.ImageContainer>
        <S.DescripsContainer>
          <S.ProductTitle>{productDetails.name}</S.ProductTitle>
          <S.BrandText>Marca: {productDetails.brand}</S.BrandText>
          <S.Divider />
          <S.PriceBefore>Preço: ${productDetails.priceBefore}</S.PriceBefore>
          <S.ProductPrice>Preço: ${productDetails.priceNow}</S.ProductPrice>
          <S.Unities>Unidades: {productDetails.un}</S.Unities>
          <S.Serial>O número de série: {serialNumber}</S.Serial>
          <S.Divider />
          <S.ProductDescription>
            {productDetails.description}
          </S.ProductDescription>
          <S.Divider />
          <S.BuyButton onClick={handlePurchase}>Comprar</S.BuyButton>
          {error && <S.ErrorText>Houve um erro no processamento do pedido. Tente novamente mais tarde</S.ErrorText>}
        </S.DescripsContainer>
      </S.ProductContainer>
      {isLoading === true ? <LoadingOverlay message="Processando compra..." /> : null}
    </>
  );
};

export default ProductPage;
