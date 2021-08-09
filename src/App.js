import React, { useState } from "react";

import { Dropdown } from "./components/Dropdown";

import styles from "./styles.module.scss";

function App() {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <div className="App">
      <div className={styles.result}>
      O estado selecionado foi{" "}
      {selectedState && <strong > {selectedState} </strong>}
      </div>
      <Dropdown
        title="Selecione uma opção"
        options={["Minas Gerais", "São Paulo", "Rio de Janeiro"]}
        onSelect={setSelectedState}
      />{" "}
    </div>
  );
}

export default App;
