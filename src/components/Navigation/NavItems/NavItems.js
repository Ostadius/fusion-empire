import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css'

const navItems = () =>(
  <ul className={classes.NavItems}>
  <NavItem link="/" exact>Home</NavItem>
  <NavItem link="/char-page">Char Viewer</NavItem>
  <NavItem link="/auth">Auth</NavItem>

  </ul>


);

export default navItems;
