import { useState } from "react";
import { Link } from "react-router-dom";
import productsModel from "../models/products-model";
import UseProductsHook from "../hooks/products";
import "./Create.css";

export default function Create() {
  const { setAllProducts } = UseProductsHook();

  const [createData, setCreateData] = useState({
    productName: "",
    productStock: 0,
    productPrice: 0,
    productDescription: "",
  });

  return (
    <main>
      <span>
        <h2 className="title-page">Stock items</h2>
      </span>
      <div className="navigation-bar">
        <Link to={"/Products"}>Todos os items</Link>
        <Link to={"/create"}>Novo item</Link>
      </div>
      <form className="form-create" onSubmit={(ev) => ev.preventDefault()}>
        <div className="wrapper-create">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              required
              type="text"
              id="name"
              onChange={(ev) =>
                setCreateData((currentState) => {
                  return { ...currentState, productName: ev.target.value };
                })
              }
              value={createData.productName}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade</label>
            <input
              required
              type="number"
              id="quantity"
              onChange={(ev) =>
                setCreateData((currentState) => {
                  return { ...currentState, productStock: ev.target.value };
                })
              }
              value={createData.productStock}
            />
          </div>
          <div>
            <label htmlFor="price">preço</label>
            <input
              required
              type="number"
              id="price"
              onChange={(ev) =>
                setCreateData((currentState) => {
                  return { ...currentState, productPrice: ev.target.value };
                })
              }
              value={createData.productPrice}
            />
          </div>
          <div>
            <label htmlFor="">Categoria</label>
            <input type="text" />
          </div>
        </div>

        <div className="wrapper-create">
          <textarea
            required
            name=""
            id=""
            onChange={(ev) =>
              setCreateData((currentState) => {
                return { ...currentState, productDescription: ev.target.value };
              })
            }
            value={createData.productDescription}
          ></textarea>
        </div>

        <div>
          <Link to={"/Products"}>
            <button
              className="btn-blue"
              onClick={() => {
                productsModel.createProduct(createData);
                setAllProducts(productsModel.getAllProducts());
              }}
            >
              Salvar
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
