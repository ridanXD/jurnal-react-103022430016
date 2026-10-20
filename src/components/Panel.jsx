function Panel({ judul, children }) {
judul ="Kantin Rizkya"
  return (
    <div className="panel">

      {judul && <h2>{judul}</h2>}
      {children}

    </div>
  );
}

export default Panel;