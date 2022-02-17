import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [detail_pakaian, setDetail_pakaian] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [merk, setMerk] = useState("");
  const [warna, setWarna] = useState("");
  const [harga, setHarga] = useState("");
  const [jenis, setJenis] = useState("");
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      detail_pakaian: detail_pakaian,
      ukuran: ukuran,
      merk: merk,
      warna: warna,
      harga: harga,
      jenis: jenis,
    });
    history.push("/crud");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Detail Pakaian</label>
          <input
            className="input"
            type="text"
            placeholder="Detail Pakaian"
            value={detail_pakaian}
            onChange={(e) => setDetail_pakaian(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Ukuran</label>
          <input
            className="input"
            type="text"
            placeholder="Ukuran"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Merk</label>
          <input
            className="input"
            type="text"
            placeholder="Merk"
            value={merk}
            onChange={(e) => setMerk(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Warna</label>
          <input
            className="input"
            type="text"
            placeholder="Warna"
            value={warna}
            onChange={(e) => setWarna(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Harga</label>
          <input
            className="input"
            type="text"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Jenis</label>
          <input
            className="input"
            type="text"
            placeholder="Jenis"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          />
        </div>

        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
