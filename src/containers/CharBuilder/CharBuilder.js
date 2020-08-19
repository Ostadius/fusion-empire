import React ,{Component, Fragment} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';



class CharBuilder extends Component {
  state= {
    activeMini:false,
    loading:true
  }

  componentDidMount () {
      this.props.onInitCharacter(this.props.token);
      console.log(this.props.char);
  }




  render(){
    let gender = this.props.loading ? <Spinner />  : <p> Haj haj </p>

    if(!this.props.loading){
       gender = (
        <p> NJUASJ </p>
       );

    }
    return (
      <div>
      <p> {gender} </p>
      </div>
    );
  }

}
const mapStateToProps = state => {
    return {
        charAtt: state.charBuilder.character,
        error: state.charBuilder.error,
        token: state.auth.token
    };
}
const mapDispatchToProps = dispatch => {
    return {
      onSetAttributes: () => dispatch(actions.setAttributes()),
      onInitCharacter: (token) => dispatch(actions.initCharacter(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharBuilder,axios);
