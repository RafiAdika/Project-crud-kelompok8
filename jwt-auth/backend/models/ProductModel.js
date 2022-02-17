import { Sequelize } from "sequelize";
import dbcrud from "../config/Database_crud.js";

const { DataTypes } = Sequelize;

const Product = dbcrud.define("products", {
  detail_pakaian: {
    type: DataTypes.STRING,
  },
  ukuran: {
    type: DataTypes.STRING,
  },
  merk: {
    type: DataTypes.STRING,
  },
  warna: {
    type: DataTypes.STRING,
  },
  harga: {
    type: DataTypes.STRING,
  },
  jenis: {
    type: DataTypes.STRING,
  },
});

export default Product;
