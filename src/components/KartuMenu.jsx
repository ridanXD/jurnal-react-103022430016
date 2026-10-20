import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  return (
    <div className="kartu-menu">
      <h3>{nama}</h3>
      <LabelHarga nilai={harga} />
      <p>Kategori: {kategori}</p>
    </div>
  );
}

export default KartuMenu;