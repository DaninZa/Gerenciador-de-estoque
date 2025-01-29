import { Link } from "react-router-dom";
import UseProductsHook from "../hooks/products";

export default function Products() {
  const { allProducts, deleteAndUpdate } = UseProductsHook();

  return (
    <main>
      <span>
        <h2 className="title-page">Stock items</h2>
      </span>
      <div className="navigation-bar">
        <Link to={"/Products"}>Todos os items</Link>
        <Link to={"/create"}>Novo item</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.productStock}</td>
                <td>{item.productCategory}</td>
                <td>
                  <Link to={`details/${item.id}`}>
                    <button className="btn-white">Ver detalhes</button>
                  </Link>
                  <button
                    className="btn-red"
                    onClick={() => deleteAndUpdate(item.id)}
                  >
                    Excluir
                  </button>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn-blue">Atualizar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
