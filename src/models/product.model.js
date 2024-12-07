export default class ProductModel {
  constructor(id, name, desc, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.imageUrl = imageUrl;
  }

  static get() {
    return Products;
  }

  static add(prodObj, imageUrl) {
    let newProduct = new ProductModel(
      Products.length + 1,
      prodObj.name,
      prodObj.desc,
      prodObj.price,
      imageUrl
    );

    Products.push(newProduct);

    return Products;
  }

  static getById(id) {
    return Products.find((prod) => prod.id == id);
  }

  static update(prodObj, imageUrl) {
    let index = Products.findIndex((prod) => prod.id == prodObj.id);

    if (index != -1) {
      Products[index] = prodObj;
      Products[index].imageUrl = imageUrl;
      return Products;
    }

    return null;
  }

  // delete by id
  static deleteById(id) {
    let index = Products.findIndex((prod) => prod.id == id);

    if (index != -1) Products.splice(index, 1);

    return Products;
  }
}

var Products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
