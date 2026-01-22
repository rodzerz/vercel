function Translations() {
    const terms = [
      { en: "Given", lv: "Dotajā gadījumā" },
      { en: "When", lv: "Kad" },
      { en: "Then", lv: "Tad" },
      { en: "And", lv: "Un" },
      { en: "But", lv: "Bet" }
    ];
  
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((term, index) => (
            <tr key={index}>
              <td>{term.en}</td>
              <td>{term.lv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export default Translations;
  