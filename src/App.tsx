import Content from './components/Content/content';
import Header from './components/header/Header';
import NavBar from './components/NavbarComponents/NavBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
