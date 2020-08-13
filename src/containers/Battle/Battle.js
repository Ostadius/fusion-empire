import React ,{Component, Fragment} from 'react';
import BattleListView from '../../components/CharView/BattleListView/BattleListView';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';


class Battle extends Component {
  state ={
    char1:null,
    char2:null,
    battleData:[],
    charlist:[],
    loading:true
  }

  componentDidMount(){
    axios.get('/battle-data.json')
    .then( res=>{
      let list = [];
      for(let key in res.data){
        list.push({
          ...res.data[key]
        })
      }

        this.setState({battleData:list});

    }

  )
  .catch(err=>{
    console.log(err);
    this.setState({loading:false})
  }

  )}


  render(){
    let listView = <BattleListView
       />
    // if(listView){
    // listView=  <BattleListView
    //   battleData={this.state.battleData} />
    // }
    // else{
    //   listView = <Spinner />
    // }
    return(
      <div>
      {listView}
      </div>
    )

  }
}

export default Battle;
