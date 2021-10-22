function App() {
  const calculo = "0";

  const styles = {
    fileira: {
      display: "flex",
    },
    button: {
      backgroundColor: "#607d8b",
      borderRadius: "20px",
      padding: "10px",
      margin: "2px",
      flex: 5,
    },
    tela: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      border: "2px inset #607d8b",
      height: "40px",
      padding: "5px 10px",
      borderRadius: "20px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={{ width: "200px" }}>
      <div style={styles.tela}>{calculo}</div>
      <div style={styles.fileira}>
        <div style={styles.button}>AC</div>
        <div style={styles.button}>&#9003;</div>
        <div style={styles.button}>%</div>
        <div style={styles.button}>&divide;</div>
      </div>
      <div style={styles.fileira}>
        <div style={styles.button}>7</div>
        <div style={styles.button}>8</div>
        <div style={styles.button}>9</div>
        <div style={styles.button}>&times;</div>
      </div>

      <div style={styles.fileira}>
        <div style={styles.button}>4</div>
        <div style={styles.button}>5</div>
        <div style={styles.button}>6</div>
        <div style={styles.button}>&minus;</div>
      </div>

      <div style={styles.fileira}>
        <div style={styles.button}>1</div>
        <div style={styles.button}>2</div>
        <div style={styles.button}>3</div>
        <div style={styles.button}>+</div>
      </div>

      <div style={styles.fileira}>
        <div style={{ flex: 1 }}>
          <div style={styles.button}>0</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={styles.button}>,</div>
          <div style={styles.button}>=</div>
        </div>
      </div>
    </div>
  );
}
export default App;
