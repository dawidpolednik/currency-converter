import React from "react";
import ChangeConverter from "./Components/ChangeConverter/ChangeConverter";
import ConverterInfo from "./Components/ConverterInfo/ConverterInfo";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <ChangeConverter />
      <ConverterInfo />
    </div>
  );
}

export default App;
