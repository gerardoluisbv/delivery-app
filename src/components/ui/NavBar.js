import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import lconoMenuSvg from '../../../src/lconoEmpanadasMenuSvg.svg';
import iconShoppingCart from '../../../src/iconShoppingCart.svg';
import iconUser from '../../../src/iconUser.svg';

import logoMenu from '../../../src/menuBurguer.svg';



//import { IconContext } from 'react-icons';

function Navbar() {
 
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <header className='navbar navbar-header--main '>
          {/*<Link to='#' className='menu-bars'>*/}
              <div className='navbar-header__container'>
    
                      <div className='gb-header__brand'>
                          <div className='nav-left' onClick={showSidebar}>
                            <img className="icons" src={logoMenu} alt="logo" />                        
                          </div>
                         
                          <div className='nav-left'>
                            <img className="iconLogoMenu" src={lconoMenuSvg} alt="logo" />
                          </div>
                        
                         
                      </div>


                      <div className='gb-header__brand'> 

                        <div className='nav-right'>
                         
                        <img className="icons" src={iconUser} alt="logo" />

                        </div>
                        <div className='nav-right'>
                          
                          <img className="icons-cart" src={iconShoppingCart} alt="logo" />

                        </div>

                      </div>  
                  
                
            </div>
           {/* <FaIcons.FaBars  />*/}
          {/*</Link>*/}
        </header>

      <div className={sidebar ? 'left-col-backdrop active' : 'left-col-backdrop'} onClick={showSidebar}> 

        {/*<div id='left-col-backdrop'>*/}
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {/*<Link to={item.path}>*/}
                      {item.icon}   {/* viene un string que renderiza los iconos */ }
                      <span>{item.title}</span>
                    {/*</Link>*/}
                  </li>
                );
              })}
            </ul>
          </nav> 
        {/*</div>*/}       


      </div>
      
    </>
  );
}

export default Navbar;
