import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";
import "./App.css";

function App() {
  const N = 70;

  return (
    <Panel judul="Menu Hari Ini">
      <KartuMenu nama="Nasi Goreng" harga={10000 + N * 100} />

      <KartuMenu nama="Mie Ayam" harga={12000} kategori="Makanan" />

      <KartuMenu nama="Es Teh Manis" harga={5000} kategori="Minuman" />
    </Panel>
  );
}

export default App;