import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css'

const navItems = () =>(
  <ul className={classes.NavItems}>
    <NavItem link="/auth">Auth</NavItem>
    <NavItem link="/" exact>Home</NavItem>
    <NavItem link="/char-builder">Char Builder</NavItem>
    <NavItem link="/char-page">Char Viewer</NavItem>
    <NavItem link="/battle-data">Battle</NavItem>

  </ul>


);

export default navItems;
