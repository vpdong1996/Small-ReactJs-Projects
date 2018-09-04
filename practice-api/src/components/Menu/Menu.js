import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

const menus =[{
  label:'HomePage',
  to:'/',
  exact: true
},
{
  label:'Manage Product',
  to:'/product',
  exact: false  
}
];

const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
  return(
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) =>{
      return(
        <li className={`nav-item ${match ? "active" : " "}`}>
        <Link className="nav-link" to={to}>{label}</Link>
      </li>
      )
     
    }} />
  )

}

class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="">Learn API</a>
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           {this.showMenu(menus)}
          </ul>
        </div>
        </div>
        
    );
  }
  showMenu = (menus) =>{
    let result = null;
    if(menus.length > 0){
      result = menus.map((menu,index) =>{
        return(
          <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact}  />
        )
      })
    }
    return result;
  }
}

export default Menu;
