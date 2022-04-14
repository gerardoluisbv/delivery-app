import React from "react";
import "../../home.css";
import iconsMenuArrow from "../../../src/iconsMenuArrow.svg";
import iconLocationMap from "../../../src/location-map.svg";

export const Home = () => {
  return (
    <div className="container_principal">
    
      <div className="container_form_home homeImage">
        

          <h1 className="font-h1-desktop"> ¡Tu Pides, Nosotros te las llevamos!!! </h1>
      

        <div className="sub_title_home">
          <h2> Deliciosas Empanadas de maiz rellenas. </h2>
        </div>

        <div className="form_home_layout">
          <h3> Ingresa tu Dirección </h3>

          <form>
            <div className="form_search">
              <div className="form_home_input ">
                <div className="item_form_home">
                  <input className="input_form_home" />
                  <img
                    className="icon_arrow_form"
                    src={iconsMenuArrow}
                    alt=">"
                  />

                  <label className="form_home_label"> Ciudad </label>
                </div>
              </div>
              <div className="item_form_home">
                <input
                  className="input_form_home"
                  placeholder="Zona Residencial"
                />
                <img className="icon_arrow_form" src={iconsMenuArrow} alt=">" />
              </div>
            </div>
            <button className="button_home"> Buscar </button>
            <button className="button_home_map">
                 
                  
                    <img className="icon_arrow_form" src={iconLocationMap} alt=">" />
                  
                    
                      Mi ubicación 
              
            </button>
          </form>
        </div>
      </div>
      
      
      <div className="section_seo_home">
      <section >
        <h3> ¡Nos alegra que estes por aqui! </h3>
        <h2>  Ya Puedes hacer tu pedido 
              desde la comodidad de tu casa, 
              Es super facil! Agregas el producto que deseas la carrito de compras
              nos indicas tu ubicación y listo! <br/>
      
        </h2>
      </section>
    </div>
    </div>
    
  );
};


export default Home;