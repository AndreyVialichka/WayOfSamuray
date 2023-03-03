import Content from './components/Content/content';
import Header from './components/header/Header';
import NavBar from './components/NavbarComponents/NavBar';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Content/>
    </BrowserRouter>
    </div>
  );
}

export default App;
