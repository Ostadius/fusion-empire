import React,{Fragment} from 'react';

import Oak from '../../../assets/oak.png';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
              <div className={classes.Logo}>
                    <img src={Oak} className={classes.Logo} />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;
