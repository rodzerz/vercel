function Translations() {
    const terms = [
      { en: "Feature", lv: "Funkcionala iezīme" },
      { en: "Scenario", lv: "Scenārijs" },
      { en: "Given", lv: "kad" },
      { en: "When", lv: "ja" },
      { en: "Then", lv: "Tad" },
      { en: "And", lv: "Un" },
      { en: "Or", lv: "Vai" },
      { en: "But", lv: "Bet" },
      { en: "Background", lv: "Kontekts" },
      { en: "Rule ", lv: "Noteikumi" },
      { en: "Scenario Outline", lv: "Scenārija paraugs" },
      { en: "Examples ", lv: "Piemēri" },
      { en: "User Story ", lv: "Lietotājstāsts" },
      { en: "Examples ", lv: "Piemēri" }
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
  