import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomCard from "../../components/Card";
import { productsContext, useProducts } from "../../contexts/productContext";

const DetailPage = () => {
  const params = useParams();
  // const { getProductById, oneProduct } = useContext(productsContext);
  const { getProductById, oneProduct } = useProducts();

  useEffect(() => {
    getProductById(params.id);
  }, []);

  if (!oneProduct) return <h1>loading....</h1>;

  return (
    <CustomCard
      product={oneProduct}
      isUserProducts={false}
      onDelete={() => {}}
    />
  );
};

export default DetailPage;
