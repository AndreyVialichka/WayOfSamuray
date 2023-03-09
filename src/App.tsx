import Content from './components/Content/content';
import Header from './components/header/Header';
import NavBar from './components/NavbarComponents/NavBar';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { addPost, STATE } from './redux/state';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Content 
        statePost ={STATE.ProfilePage.statePost}
        stateNames = {STATE.DialogsPage.stateNames}
        stateMessages = {STATE.DialogsPage.stateMessages}
        addPost = {addPost}
        />
    </BrowserRouter>
    </div>
  );
}

export default App;
