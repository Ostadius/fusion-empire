import React, {Fragment, Component} from 'react';
import CharMiniView from '../../components/CharView/CharMiniView/CharMiniView';
import axios from '../../axios-orders';



class CharPage extends Component{
  state ={
    chars:[],
    loading:true,
    stats:{

    }

  }
  componentDidMount(){
    axios.get('/characters.json')
    .then( res=>{
      const fetchedChar =[];
      for(let key in res.data)
        fetchedChar.push({
          ...res.data[key],
          id:key
        })
        this.setState({loading:false, chars:fetchedChar});
        console.log(fetchedChar);
    }

  )
  .catch(err=>{
    console.log(err);
    this.setState({loading:false})
  }

);
console.log(this.state.chars);
}
  render(){
    return(
      <Fragment>
      <a> HAJ HAJ</a>
      {this.state.chars.map(char=>(
        <div key ={char.id}>
        <CharMiniView
        id={char.id}
        class={char.currentClass}
        />

        </div>
      ))}

      </Fragment>
    );
  }
}

export default CharPage;
