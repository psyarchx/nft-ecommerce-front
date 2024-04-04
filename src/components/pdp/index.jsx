import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed for HTTP requests
import * as S from './styles';
import phoneImage from '../../assets/phone.png';

const ProductPage = () => {
  const [mintSuccess, setMintSuccess] = useState(false);

  // Mock product details, adjust as necessary for your application
  const productDetails = {
    name: "Lumixar - AstraZen 5G, dual camera, 128GB, Dual SIM, 6.5'",
    brand: "Lumixar",
    priceBefore: "999.99",
    priceNow: "799.99",
    un: 1,
    description: "O Lumixar AstraZen 5G combina elegância e tecnologia de ponta com sua dupla câmera de alta definição, 128GB de armazenamento e suporte Dual SIM. Sua tela de 6.5 polegadas proporciona uma experiência visual imersiva, enquanto a conectividade 5G garante velocidade ultrarrápida, mantendo você sempre conectado. Ideal para aqueles que valorizam desempenho, capacidade de armazenamento e a conveniência de gerenciar duas linhas em um único aparelho, o AstraZen 5G redefine o que esperamos de um smartphone moderno."
  };

  const handlePurchase = async () => {
    // Create a FormData object to package the name, description, and image file
    const formData = new FormData();
    formData.append('name', productDetails.name);
    formData.append('description', productDetails.description);
  
    try {
      // Fetch the image from its URL
      const imageResponse = await fetch(phoneImage);
      if (!imageResponse.ok) throw new Error('Failed to fetch image');
      
      // Convert the image response to a Blob
      const imageBlob = await imageResponse.blob();
      
      // Create a File object from the Blob (optional, but gives you more control over filename and type)
      const imageFile = new File([imageBlob], 'phoneImage.png', { type: 'image/png' });
      
      // Append the File object to your FormData
      formData.append('image', imageFile);
  
      const response = await axios.post('http://localhost:3001/api/mint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data); // Log the response from the server
      setMintSuccess(true);
    } catch (error) {
      console.error('There was an error processing the purchase:', error);
      setMintSuccess(false);
    }
  };

  return (
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
        <S.Divider />
        <S.ProductDescription>
          {productDetails.description}
        </S.ProductDescription>
        <S.Divider />
        <S.BuyButton onClick={handlePurchase}>Comprar</S.BuyButton>
        {mintSuccess && <p>Metadados atualizados com sucesso!</p>}
      </S.DescripsContainer>
    </S.ProductContainer>
  );
};

export default ProductPage;
