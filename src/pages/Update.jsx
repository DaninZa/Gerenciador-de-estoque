import { useParams } from "react-router-dom";
import productsModel from "../models/products-model";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Create";

export default function Update() {
  const params = useParams();

  const [updateData, setUpdateData] = useState({
    ...productsModel.getItemById(params.id),
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
      <div className="form-create">
        <div className="wrapper-create">
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              onChange={(ev) =>
                setUpdateData((currentState) => {
                  return { ...currentState, productName: ev.target.value };
                })
              }
              value={updateData.productName}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              onChange={(ev) =>
                setUpdateData((currentState) => {
                  return { ...currentState, productStock: ev.target.value };
                })
              }
              value={updateData.productStock}
            />
          </div>
          <div>
            <label htmlFor="price">preço:</label>
            <input
              type="number"
              id="price"
              onChange={(ev) =>
                setUpdateData((currentState) => {
                  return { ...currentState, productPrice: ev.target.value };
                })
              }
              value={updateData.productPrice}
            />
          </div>
          <div>
            <label htmlFor="">Categoria</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <div className="wrapper-special">
            <textarea
              name=""
              id=""
              onChange={(ev) =>
                setUpdateData((currentState) => {
                  return {
                    ...currentState,
                    productDescription: ev.target.value,
                  };
                })
              }
              value={updateData.productDescription}
            ></textarea>
          </div>
        </div>
        <div style={{ textAlign: "start" }}>
          <Link to={"/products"}>
            <button
              className="btn-blue"
              onClick={() => productsModel.UpdateProduct(params.id, updateData)}
            >
              Salvar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
