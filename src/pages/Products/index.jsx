import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productContext";
import CustomCard from "../../components/Card";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import CustomPagination from "../../components/CustomPagination";
import { useFavorites } from "../../contexts/favoriteContext";
import { toast } from "react-toastify";

const Products = () => {
  const { products, getProducts } = useContext(productsContext);
  const { getFavorites, favorites } = useFavorites();
  const [searchParams] = useSearchParams();

  const { addFavoriteToStorage, removeFromFavorites } = useFavorites()

  const onFavorite = async (product) => {
    const isFav = favorites.find(fav => fav.id === product.id);
    if(isFav) {
      await removeFromFavorites(product.id);
      await getFavorites()
      toast.success("removed from fav");
    } else {
      await addFavoriteToStorage(product);
      await getFavorites()
      toast.success("added to fav")
    }
  }

  useEffect(() => {
    getProducts(
      searchParams.get("search"),
      searchParams.get("category"),
      searchParams.get("_page")
    );
    getFavorites();
  }, [searchParams]);

  return (
    <div className="products">
      <h3>Products</h3>
      <div className="product-list">
        {products
          ? products.map((item) => (
            <CustomCard
              product={item}
              favorites={favorites}
              onFavorite={onFavorite}
            />
            ))
          : "Empty"}
      </div>
      <CustomPagination />
    </div>
  );
};

export default Products;
