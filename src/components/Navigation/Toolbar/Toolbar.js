import React from 'react';
import NavItems from '../NavItems/NavItems';
import Oak from '../../../assets/elements.png';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolBar =(props)=>(
<header className={classes.Toolbar}>
<img src={Oak} alt="oak-pic" className={classes.logo} />
<DrawerToggle clicked={props.drawerToggleClicked} />
    <nav>
      <NavItems />
    </nav>
</header>
);

export default toolBar;
