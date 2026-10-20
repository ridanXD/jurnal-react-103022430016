import { useState } from "react";

function KartuMenu(props) {
  return (
    <div className="card">
    <h1 className='judul'> Menu </h1>
      <p>{props.nama}</p>
      <p>{props.harga}</p>
      <p>Makanan: {props.kategori}</p>
    </div>
  );
}
export default KartuMenu;
function Counter() {
const [jumlah, setJumlah] = useState(0);
return (
<div>
<p>Jumlah klik: {jumlah}</p>
<button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
<button onClick={() => setJumlah(0)}>Reset</button>
</div>
);
}


function FormNama() {
const [nama, setNama] = useState("");
return (
<div>
<label htmlFor="nama">Nama:</label>
<input
id="nama"
type="text"
value={nama}
onChange={(e) => setNama(e.target.value)}
/>
<p>Halo, {nama || "Tamu"}!</p>
</div>
);
} 