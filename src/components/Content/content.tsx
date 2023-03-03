import { BrowserRouter, Route } from 'react-router-dom';
import  classes from './Content.module.css'
import Dialogs from './Dialogs/Dialogs';
import Music from './Music/Music';
import News from './News/News';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';


function Content() {
    return ( 
        <div className= {classes.content} >
          <Route path='/profile' component = {Profile} />
          <Route path='/dialogs' component = {Dialogs} />
          <Route path='/news' component = {News} />
          <Route path='/music' component = {Music} />
          <Route path='/settings' component = {Settings} />
        </div>
    );
  }
  
  export default Content;