import { useState } from "react"
const currentTime = new Date()

const Finanzas = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const handleOnClick = (index) => {
      setActiveIndex(index);
      // Agrega lógica adicional para cambiar el contenido en la parte derecha según el índice
    };
  
    return (
      <div className="wrapper-content">
      <div className="row finanzas-wrapper">
        {/* Columna Izquierda - Panel de Botones */}
        <div className="col-md-4 finanzas-menu">
          <ul className="widget-menu-tab">
            <li className={activeIndex === 1 ? "item-title-fin active" : "item-title-fin"} onClick={() => handleOnClick(1)}>
              <h4 className="inner">Compra</h4><p style={{ fontSize: '16px', lineHeight: '1.5'}}>Compra crypto con tu tarjeta.</p>
            </li>
            <li className={activeIndex === 2 ? "item-title-fin active" : "item-title-fin"} onClick={() => handleOnClick(2)}>
              <h4 className="inner">Swap</h4><p style={{ fontSize: '16px', lineHeight: '1.5'}}>Realiza intercambios directos de criptomonedas.</p>
            </li>
            <li className={activeIndex === 3 ? "item-title-fin active" : "item-title-fin"} onClick={() => handleOnClick(3)}>
              <h4 className="inner">Pools de Liquidez</h4><p style={{ fontSize: '16px', lineHeight: '1.5'}}>Invierte de la menra más segura y obtén recompensas.</p>
            </li>
            <li className={activeIndex === 4 ? "item-title-fin active" : "item-title-fin"} onClick={() => handleOnClick(4)}>
              <h4 className="inner">Re-invierte</h4><p style={{ fontSize: '16px', lineHeight: '1.5'}}>Reinvierte tus ganancias para un mayor rendimiento.</p>
            </li>
          </ul>
        </div>
  
        {/* Columna Derecha - Contenido Cambiante */}
        <div className="col-xl-7 finanzas-content">
          {/* Agrega aquí el contenido que cambiará según el botón seleccionado */}
          {activeIndex === 1 && <div className="finanzas-inner">
            <img src="assets/images/item-background/compra.png" alt=""/>
            </div>}
          {activeIndex === 2 && <div className="finanzas-inner">
            <img src="assets/images/item-background/swap.png" alt=""/>
            </div>}
          {activeIndex === 3 && <div className="finanzas-inner">
          <img src="assets/images/item-background/pools.png" alt=""/>
            </div>}
          {activeIndex === 4 && <div className="finanzas-inner">
          <img src="assets/images/item-background/reinvierte.png" alt=""/>
            </div>}
        </div>
      </div>
      </div>
    );
  };

export default Finanzas;