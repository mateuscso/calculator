import { useState } from "react";

function App() {
  const [calculo, setCalculo] = useState("0");

  const changeNumber = (number) => {
    if (calculo === "0") {
      if (number === "0") {
        setCalculo("0");
        return;
      }
      setCalculo(number);
      return;
    }
    setCalculo(calculo + number);
  };
  /**
 *Primeiro: Apertar a virgula sem ter numero- soma a virgula ao valor
 segundo: Se tiver um valor soma ao segundo numero
 terceiro: se ja tiver virgula ignora o botao. 
 */
  /* const insertComma = (value) => {
    if (value === comma) {
    }
  };*/

  const clearCalculo = () => {
    setCalculo("0");
  };

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
      marginBottom: "10px   ",
    },
  };

  return (
    <div style={{ width: "200px" }}>
      <div style={styles.tela}>{calculo}</div>
      <div style={styles.fileira}>
        <button
          onClick={() => clearCalculo()}
          type={"button"}
          style={styles.button}
        >
          AC
        </button>
        <button type={"button"} style={styles.button}>
          &#9003;
        </button>
        <button type={"button"} style={styles.button}>
          %
        </button>
        <button type={"button"} style={styles.button}>
          &divide;
        </button>
      </div>
      <div style={styles.fileira}>
        <button
          onClick={() => changeNumber("7")}
          type={"button"}
          style={styles.button}
        >
          7
        </button>
        <button
          onClick={() => changeNumber("8")}
          type={"button"}
          style={styles.button}
        >
          8
        </button>
        <button
          onClick={() => changeNumber("9")}
          type={"button"}
          style={styles.button}
        >
          9
        </button>
        <button type={"button"} style={styles.button}>
          &times;
        </button>
      </div>

      <div style={styles.fileira}>
        <button
          onClick={() => changeNumber("4")}
          type={"button"}
          style={styles.button}
        >
          4
        </button>
        <button
          onClick={() => changeNumber("5")}
          type={"button"}
          style={styles.button}
        >
          5
        </button>
        <button
          onClick={() => changeNumber("6")}
          type={"button"}
          style={styles.button}
        >
          6
        </button>
        <button type={"button"} style={styles.button}>
          &minus;
        </button>
      </div>

      <div style={styles.fileira}>
        <button
          onClick={() => changeNumber("1")}
          type={"button"}
          style={styles.button}
        >
          1
        </button>
        <button
          onClick={() => changeNumber("2")}
          type={"button"}
          style={styles.button}
        >
          2
        </button>
        <button
          onClick={() => changeNumber("3")}
          type={"button"}
          style={styles.button}
        >
          3
        </button>
        <button type={"button"} style={styles.button}>
          +
        </button>
      </div>

      <div style={styles.fileira}>
        <div style={{ flex: 1 }}>
          <button
            onClick={() => changeNumber("0")}
            type={"button"}
            style={styles.button}
          >
            0
          </button>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <button
            onClick={() => changeNumber(",")}
            type={"button"}
            style={styles.button}
          >
            ,
          </button>
          <button type={"button"} style={styles.button}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
