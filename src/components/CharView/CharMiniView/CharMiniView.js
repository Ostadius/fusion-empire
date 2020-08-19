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
<p>{divID}</p> <br/>
<p>{divEx}</p> <br/>
<p>{divName}</p><br/>
<p>{divRace}</p><br/>
<p>{divJob}</p><br/>
<p>{divGender}</p><br/>
<p>{divMoon}</p><br/>
</div>
)};

export default charMiniView;
