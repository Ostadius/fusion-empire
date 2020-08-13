import React from 'react';
import classes from './BattleListView.module.css';


const battleListView = (props) =>{


return(
  <div classes={classes.List}><p>{props.battleData}</p></div>
);


}

export default battleListView;
