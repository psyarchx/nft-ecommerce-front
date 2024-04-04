import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed for HTTP requests
import * as S from './styles';
import phoneImage from '../../assets/phone.png';

const ProductPage = () => {
  const [mintSuccess, setMintSuccess] = useState(false);

  // Mock product details, adjust as necessary for your application
  const productDetails = {
    name: "Iphone pro max dos caralho celular horrivel da porra",
    brand: "Apple",
    price: "99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
        <S.ProductPrice>Preço: ${productDetails.price}</S.ProductPrice>
        <S.ProductDescription>
          {productDetails.description}
        </S.ProductDescription>
        <S.Divider />
        <S.BuyButton onClick={handlePurchase}>Buy Now</S.BuyButton>
        {mintSuccess && <p>Metadados atualizados com sucesso!</p>}
      </S.DescripsContainer>
    </S.ProductContainer>
  );
};

export default ProductPage;
