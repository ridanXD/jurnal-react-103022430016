import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";
import "./App.css";

function App() {
  const N = 70;
  var uang = 150000
  const jam = 9
  var waktu = "Pagi"
  if (jam < 12) {
    waktu = "Pagi"
  } else if (jam >12) {
    waktu = "Siang"
  }
  return (
    <Panel judul="Menu Hari Ini">
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQE6-7mJVojFkw/profile-displayphoto-scale_200_200/B4DZqPZYm1JEAY-/0/1763342389541?e=2147483647&v=beta&t=vpY3J4IObxb-Uyuw0W6EHrwScs0hsOWt_U7moJ_geDA"></img>
      <p>
        Halo Selamat {waktu}
      </p>
      <p>
        Uang kamu {uang}
      </p>
      <button type="button" disabled="true">Bayar</button>
      <KartuMenu nama="Nasi Goreng" harga={10000 + N * 100} />

      <KartuMenu nama="Mie Ayam" harga={12000} kategori="Makanan" />

      <KartuMenu nama="Es Teh Manis" harga={5000} kategori="Minuman" />


    </Panel>
  );
}

export default App;