import React from "react";
import "../../home.css";
import iconsMenuArrow from "../../../src/iconsMenuArrow.svg";


export const Home = () => {
  return (
    <div className="homeImage">
      <h1> !Pide tus empanadas te las llevamos a casa¡ </h1>

      <div>
        <h2> Deliciosas Empanadas de maiz rellenas. </h2>
      </div>

      <div className="form_home_layout">
        <h3> Ingresa tu Dirección </h3>

        <form>
          <div className="form_search">
            <div className="form_home_input">
              <div className="item_form_home">
                <input />
                <img className="icon_arrow_form"
                  src={iconsMenuArrow}
                  alt=">"
                />

                <label className="form_home_label"> Ciudad </label>
               
              </div>
            </div>
            <div className="item_form_home"></div>
          </div>
          <button className="button_home"> Buscar </button>
        </form>
      </div>
    </div>
  );
};
