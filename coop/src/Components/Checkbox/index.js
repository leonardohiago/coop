import React, { Component } from "react";
import { Styled } from "./styles";

const Checkbox = () => {
  return (
    <Styled>
      <div class="column-checkbox">
        <label class="container item-position">
          Dinheiro
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Alimento
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Ração
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Eletrônicos
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="column-checkbox">
        <label class="container item-position">
          Roupa
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Móveis
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Mão de obra
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Material escolar
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="column-checkbox">
        <label class="container">
          Material limpeza
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Material construção
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Material higiene
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container item-position">
          Outros
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </Styled>
  );
};

export default Checkbox;
