import React from 'react';
import classes from './CharMiniView.module.css';

const charMiniView =(props) =>{
const divId=`${props.id}`;
const divRace=`${props.race}`;
const divClass=`${props.class}`;
const divGender=`${props.gender}`;
const divMoon=`${props.moon}`;
const divName=`${props.name}`;



return(

<div className={classes.miniCharView}>
<a>{divId}</a> <br/>
<a>{divClass}</a>
</div>
)};

export default charMiniView;
