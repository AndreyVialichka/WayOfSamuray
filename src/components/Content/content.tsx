import { type } from 'os';
import { BrowserRouter, Route } from 'react-router-dom';
import  classes from './Content.module.css'
import Dialogs from './Dialogs/Dialogs';
import Music from './Music/Music';
import News from './News/News';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';


type ContentProps = {
  statePost : Array<StatePostType>
  stateNames: Array<StateNamesType>
  stateMessages: Array<StateMessageType>
  addPost: (value : string) => void
}


type StatePostType = {
  id:number
  likeNumber:number
  text: string
}

type StateNamesType = {
  id: number 
  name: string
}

type StateMessageType = {
  id: number,
  Message: string
}

function Content(props:ContentProps) { 
    return ( 
        <div className= {classes.content} >
          <Route path='/profile' render= { () => <Profile posts ={props.statePost} addPost = {props.addPost}/> } />
          <Route path='/dialogs'render= { () => <Dialogs names ={props.stateNames} messages ={props.stateMessages} /> } />
          <Route path='/news' component = {News} />
          <Route path='/music' component = {Music} />
          <Route path='/settings' component = {Settings} />
        </div>
    );
  }
  
  export default Content;