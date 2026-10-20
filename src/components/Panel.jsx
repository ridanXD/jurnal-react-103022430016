function Panel({ judul, children }) {
judul ="Kantin Rizkya"
var uang = 14000
  return (
    <div className="panel">

      {judul && <h2>{judul}</h2>}
      {children}
      <p>
        Uang kamu {uang}
      </p>
    </div>
  );
}

export default Panel;