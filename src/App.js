import React, { useState } from "react";

import { Dropdown } from "./components/Dropdown";

function App() {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <div className="App">

    { selectedState && <div>O estado selecionado foi {selectedState}</div> }

      <Dropdown
        title="Selecione uma opção"
        options={["Minas Gerais", "São Paulo", "Rio de Janeiro"]}
        onSelect={setSelectedState}
      />
    </div>
  );
}

export default App;
