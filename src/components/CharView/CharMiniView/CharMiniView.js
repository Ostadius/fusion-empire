import React from 'react';
import classes from './CharMiniView.module.css';

const charMiniView =(props) =>{
const divEx=`${props.exElement}`;
const divRace=`${props.race}`;
const divJob=`${props.job}`;
const divGender=`${props.gender}`;
const divMoon=`${props.moon}`;
const divName=`${props.name}`;
const divID=`${props.id}`



return(

<div className={classes.miniCharView}>
<p>{divID}</p> 
<p>{divEx}</p> 
<p>{divName}</p>
<p>{divRace}</p>
<p>{divJob}</p>
<p>{divGender}</p>
<p>{divMoon}</p>
</div>
)};

export default charMiniView;
