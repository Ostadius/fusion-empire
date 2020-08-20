import React from 'react';
import NavItems from '../NavItems/NavItems';
import Elements from '../../../assets/elements.png';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolBar =(props)=>(
<header className={classes.Toolbar}>
<DrawerToggle clicked={props.drawerToggleClicked} />
<img src={Elements} alt="elements-pic" className={classes.logo} />
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
</header>
);

export default toolBar;
