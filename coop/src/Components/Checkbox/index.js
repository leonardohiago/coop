import React from 'react';
import { Container } from './styles';

const GroupCheckbox = () =>{
    return (
        <Container>
            <div class="column-checkbox">
                <label class="label-checkbox">
                  <input class="checkbox-style" type="checkbox" name="money"/>
                  Dinheiro
                </label>
                <label class="label-checkbox">
                  <input class="checkbox-style" type="checkbox" name="food"/>
                  Alimento
                </label>
                <label class="label-checkbox">
                  <input class="checkbox-style" type="checkbox" name="ration"/>
                  Ração
                </label>
                <label class="label-checkbox">
                  <input class="checkbox-style" type="checkbox" name="electronics"/>
                  Eletrônicos
                </label>
              </div>

              <div class="column-checkbox">
                    <label class="label-checkbox">
                      <input class="checkbox-style" type="checkbox" name="clothes"/>
                      Roupa
                    </label>
                    <label class="label-checkbox">
                      <input class="checkbox-style" type="checkbox" name="furniture"/>
                      Móveis
                    </label>
                    <label class="label-checkbox">
                      <input class="checkbox-style" type="checkbox" name="manpower"/>
                      Mão de obra
                    </label>
                    <label class="label-checkbox">
                      <input class="checkbox-style" type="checkbox" name="schoolsupplies"/>
                      Material escolar
                    </label>
                  </div>

                  <div>
                            <label class="label-checkbox">
                              <input class="checkbox-style" type="checkbox" name="cleaningmaterial"/>
                              Material limpeza
                            </label>
                            <label class="label-checkbox">
                              <input class="checkbox-style" type="checkbox" name="constructionmaterial"/>
                              Material construção
                            </label>
                            <label class="label-checkbox">
                              <input class="checkbox-style" type="checkbox" name="hygienematerial"/>
                              Material higiene
                            </label>
                            <label class="label-checkbox">
                              <input class="checkbox-style" type="checkbox" name="others"/>
                              Outros
                            </label>
                          </div>
        </Container>

    );
};

export default GroupCheckbox;