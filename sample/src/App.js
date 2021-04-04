import React,{Component} from 'react'
import './App.css';
import Rect from './React'

let theme={
  light:{
    styles:{
      backgroundColor:"#f0f9ff",
      color:"#00f",
    },
    head:"bg-primary text-white display-4 mt-4",
    alert:"alert alert-primary my-3",
    text:"text-primary m-3",
    foot:"py-4"
  },
  dark:{
    styles:{
      backgroundColor:"#336",
      color:"#eef",
    },
    head:"bg-primary text-white display-4 mt-4",
    alert:"alert alert-dark my-3",
    text:"text-light m-3",
    foot:"py-4"
  }
}

const ThemeContext=React.createContext(theme.dark)
class App extends Component{
  static contextType=ThemeContext
  input=""

  constructor(props){
    super(props)
    this.state={
      title:"input form",
      message:"type your name.",
      max:10
    }
    
    this.doCheck=this.doCheck.bind(this)
    this.doChange=this.doChange.bind(this)
    this.doSubmit=this.doSubmit.bind(this)
  }

  doCheck(event){
    alert(event.target.value+"は長過ぎます。(最大"+this.state.max+"文字)")
  }

  doChange(event){
    this.input=event.target.value
  }

  doSubmit(event){
    this.setState({
      title:'send form',
      message:'Hello,'+this.input+"!"
    })
    event.preventDefault()
  }

  render(){
    return <div style={this.context.styles}>
      <h1 className={this.context.head}>React</h1>
      <div className="container">
        <h4>{this.state.title}</h4>
        <p className="card h5 p-3">{this.state.message}</p>
        <Message maxlength={this.state.max} onCheck={this.doCheck} />

        <div className="alert alert-primary mt-3">
          <form onSubmit={this.doSubmit}>
            <div className="form-group">
              <label>Message:</label>
              <input type="text" className="form-control" onChange={this.doChange} required pattern="[A-Za-z _++]+"/>
            </div>
            <input type="submit" className="btn btn-primary" valeu="Click"/>
          </form>
        </div>
        <div className={this.context.foot}></div>
      </div>
    </div>
  }
}

class Message extends Component{
  li={
    fontSize:"14pt",
    fontWeight:"bold",
    color:"#090"
  }

  constructor(props){
    super(props)
    this.doChange=this.doChange.bind(this)
  }

  doChange(event){
    if(event.target.value.length>this.props.maxlength){
      this.props.onCheck(event)
      event.target.value=event.target.value.substr(0,this.props.maxlength)
    }
  }

  render(){
    return <div calssName="form-group">
      <label>input:</label>
      <input type="text" className="form-control" onChange={this.doChange}/>
    </div>
  }
}


export default App;
