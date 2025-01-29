import productsModel from "../models/products-model";
import { useState } from "react";

export default function UseProductsHook() {
  const [allProducts, setAllProducts] = useState(
    productsModel.getAllProducts()
  );

  function deleteAndUpdate(id) {
    productsModel.deleteProduct(id);
    setAllProducts(productsModel.getAllProducts());
  }

  return { allProducts, setAllProducts, deleteAndUpdate };
}
