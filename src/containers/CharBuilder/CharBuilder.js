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
      this.props.onInitCharacter();
      console.log(this.props.error);
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
      <a> {gender} </a>
      </div>
    );
  }

}
const mapStateToProps = state => {
    return {
        charAtt: state.charBuilder.character,
        error: state.charBuilder.error
    };
}
const mapDispatchToProps = dispatch => {
    return {
      onSetAttributes: () => dispatch(actions.setAttributes()),
      onInitCharacter: () => dispatch(actions.initCharacter())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharBuilder,axios);
