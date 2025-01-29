import productsModel from "../models/products-model";
import { Link, useParams } from "react-router-dom";
import UseProductsHook from "../hooks/products";
import "./Product.css";

export default function Product() {
  const { deleteAndUpdate } = UseProductsHook();
  const params = useParams();
  const product = productsModel.getItemById(params.id);
  return (
    <main>
      <span>
        <h2 className="title-page">Stock items</h2>
      </span>
      <div className="navigation-bar">
        <Link to={"/Products"}>Todos os items</Link>
        <Link to={"/create"}>Novo item</Link>
      </div>
      <div className="container-info-product">
        <div>
          <span className="span-product-name">{product.productName}</span>
          <Link to={`/update/${product.id}`}>
            <button className="btn-white">Atualizar</button>
          </Link>
          <Link to={"/products"}>
            <button
              className="btn-red"
              onClick={() => deleteAndUpdate(product.id)}
            >
              Excluir
            </button>
          </Link>
        </div>
        <div className="wrapper-product-data">
          <div>Categoria:{product.productCategory}</div>
          <div>Quantidade em estoque:{product.productStock}</div>
          <div>Preço:{product.productPrice}</div>
        </div>
        <div className="wrapper-produtc-bottom">
          <div>{product.productDescription}</div>
          <div>Cadastrado em: {product.productDateOfAdd.toString()}</div>
        </div>
      </div>
    </main>
  );
}
