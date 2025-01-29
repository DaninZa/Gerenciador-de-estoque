let AllProducts = [
  {
    id: "1",
    productCategory: "furniture",
    productName: "Mesa de jantar ZOL",
    productDescription: "Uma mesa robusta, mas elegante!",
    productPrice: 100,
    productDateOfAdd: new Date(),
    productStock: 3,
  },
  {
    id: "2",
    productCategory: "furniture",
    productName: "Cadeira de jantar ZOL",
    productDescription: "Uma cadeira confortavel para todos os momentos!",
    productPrice: 50,
    productDateOfAdd: new Date().setDate(-11),
    productStock: 4,
  },
  {
    id: "3",
    productCategory: "furniture",
    productName: "Cadeira de jantar ZOL",
    productDescription: "Uma cadeira confortavel para todos os momentos!",
    productPrice: 50,
    productDateOfAdd: new Date().setDate(-15),
    productStock: 4,
  },
];

export default {
  getAllProducts: () => AllProducts,

  getItemById: (id) => AllProducts.find((p) => p.id === id),

  getQuantityItems: () =>
    AllProducts.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.productStock;
    }, 0),

  getTotalItems: () => AllProducts.length,

  getItemsAddedBeforeTenDays: () => {
    const data = AllProducts.filter(
      (p) => p.productDateOfAdd > new Date().setDate(-10)
    );
    return [data, data.length];
  },

  getItemsLowStock: () => {
    const data = AllProducts.filter((p) => p.productStock < 10);
    return [data, data.length];
  },

  deleteProduct: (id) => (AllProducts = AllProducts.filter((p) => p.id != id)),

  UpdateProduct: (id, updateData) => {
    const productIndex = AllProducts.findIndex((p) => p.id == id);
    AllProducts[productIndex] = { ...AllProducts[productIndex], ...updateData };
  },

  createProduct: (createData) => {
    const productBase = {
      id: Math.floor(Math.random() * 1000000000).toString(),
      productCategory: "Generic",
      productName: "ProductGeneric",
      productDescription: "Void",
      productPrice: 0,
      productDateOfAdd: new Date(),
      productStock: 0,
    };

    AllProducts.push({ ...productBase, ...createData });
  },
};
