import React ,{Component,Fragment} from 'react';
import Login from '../../../components/Login/Login';
import axios from '../../../axios-orders';


class Home extends Component{
  state ={
    loginForm:{

    },
    loading:true,
    chars:[]
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

  )}
  inputChangeHandler=(event)=>{
    console.log(event.target.value);

  }
  loginButton =(event)=>{
    alert('trying to log in but...')
  }
  render (){

    return(
      <Fragment>
      <Login
        changed={(event)=>this.inputChangeHandler(event)}
        loginBtn={(event)=>this.loginButton(event)}/>
          <form>
          </form>

      </Fragment>

    )

  }
}
export default Home;
