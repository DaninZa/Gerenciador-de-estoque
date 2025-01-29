import productsModel from "../models/products-model";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="container-dashboard">
      <span>
        <h2 className="title-page">Dashboard</h2>
      </span>
      <section className="wrapper-statistics">
        <div className="box-statistics">
          <div>Iventário total</div>
          {productsModel.getQuantityItems()}
        </div>
        <div className="box-statistics">
          <div>Diversidade de items</div>
          {productsModel.getTotalItems()}
        </div>
        <div className="box-statistics">
          <div>Items recentes</div>
          {productsModel.getItemsAddedBeforeTenDays()[1]}
        </div>
        <div className="box-statistics">
          <div>Items acabando</div>
          {productsModel.getItemsLowStock()[1]}
        </div>
      </section>
      <section className="wrapper-information">
        <div className="box-information-table">
          <table>
            <thead>
              <tr>
                <th>Items recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {productsModel.getItemsAddedBeforeTenDays()[0].map((item) => (
                <tr key={item.id}>
                  <td>{item.productName}</td>
                  <td>
                    <Link to={`/Products/details/${item.id}`}>
                      <button className="btn-white">Ver</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="box-information-table">
          <table>
            <thead>
              <tr>
                <th>Items acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {productsModel.getItemsLowStock()[0].map((item) => (
                <tr key={item.id}>
                  <td>{item.productName}</td>
                  <td>{item.productStock}</td>
                  <td>
                    <Link to={`/Products/details/${item.id}`}>
                      <button className="btn-white">Ver</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
