import React, {Fragment, Component} from 'react';
import CharMiniView from '../../components/CharView/CharMiniView/CharMiniView';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


import axios from '../../axios-orders';



class CharPage extends Component{
  state ={

    stats:{}

  }
  componentDidMount(){
    this.props.onFetchCharacters(this.props.token)
    console.log(this.props.loading);
}
  render(){
    let fetchedCharView = <Spinner />
    console.log(this.props.chars.id);
    if(!this.props.loading){
      console.log(this.props.chars);
      fetchedCharView = this.props.chars.map(char =>(
        <CharMiniView
        key={char.id}
        exElement={char.exElement}
        name={char.name}
        race={char.race}
        moon={char.moon}
        job={char.job}
        gender={char.gender}
         />

       ))

    }
    return(
      <Fragment>
      <a> HAJ HAJ</a>
      {fetchedCharView}


      </Fragment>
    );
  }
}
const mapStateToProps = state => {
    return {
        chars:  state.charPage.chars,
        token: state.auth.token,
        loading: state.charPage.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
      onFetchCharacters: (token) => dispatch(actions.fetchCharacters(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharPage, axios);
