import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
  {
    nameLabel : 'HomePage',
    linkTo : '/',
    exact : true
  },
  {
    nameLabel : 'About Us',
    linkTo : '/about',
    exact : false
  },
  {
    nameLabel : 'Contact',
    linkTo : '/contact',
    exact : false
  },
  {
    nameLabel : 'Products',
    linkTo : '/products',
    exact : false
  },{
    nameLabel : 'Login',
    linkTo : '/login',
    exact : false
  }

]
 
const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
  return(
      <Route path={to} exact={activeOnlyWhenExact} children={({match})=>(
          <li className={match ? 'active': ''}>
            <Link  to={to} className='nav-link'>{label}</Link>
          </li>
        )} />
  )
}
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {this.showMenu(menus) }
        </ul>
      </div>
    </nav>  
    );
  }
  showMenu = (menus) =>{
    let result = null;
    if(menus.length  > 0){
      result = menus.map((menu,index) =>{
        return (
          <MenuLink key={index} label={menu.nameLabel} to={menu.linkTo} activeOnlyWhenExact={menu.exact} />
        )
      }) 
    }
    return result
  }
}

export default Menu;
