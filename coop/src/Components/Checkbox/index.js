import React from "react";
import { GroupCheckbox } from "./styles";

const Checkbox = () => {
  const [itens, setItens] = React.useState("");

  function handleChange({ target }) {
    if (target.checked) {
      setItens([...itens, target.value]);
    } else {
      setItens(itens.filter((item) => item !== target.value));
    }
  }

  return (
    <GroupCheckbox>
      <div>
        <label className="item">
          Dinheiro
          <input
            type="checkbox"
            checked={itens.includes("1")}
            value="1"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Alimento
          <input
            type="checkbox"
            checked={itens.includes("2")}
            value="2"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Ração
          <input
            type="checkbox"
            checked={itens.includes("3")}
            value="3"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Eletrônicos
          <input
            type="checkbox"
            checked={itens.includes("4")}
            value="4"
            onChange={handleChange}
          />
          <span></span>
        </label>
      </div>

      <div>
        <label className="item">
          Roupa
          <input
            type="checkbox"
            checked={itens.includes("5")}
            value="5"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Móveis
          <input
            type="checkbox"
            checked={itens.includes("6")}
            value="6"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Mão de obra
          <input
            type="checkbox"
            checked={itens.includes("7")}
            value="7"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          Material escolar
          <input
            type="checkbox"
            checked={itens.includes("8")}
            value="8"
            onChange={handleChange}
          />
          <span></span>
        </label>
      </div>

      <div>
        <label>
          Material limpeza
          <input
            type="checkbox"
            checked={itens.includes("9")}
            value="9"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          Material construção
          <input
            type="checkbox"
            checked={itens.includes("10")}
            value="10"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          Material higiene
          <input
            type="checkbox"
            checked={itens.includes("11")}
            value="11"
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label className="item">
          Outros
          <input
            type="checkbox"
            checked={itens.includes("12")}
            value="12"
            onChange={handleChange}
          />
          <span></span>
        </label>
      </div>
    </GroupCheckbox>
  );
};

export default Checkbox;
