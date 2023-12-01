import './App.css';
import InsideMenu from './components/InsideMenu/InsideMenu';
import LogoWrapp from './components/LogoWrapp/LogoWrapp';
import Menu from './components/Menu/Menu';
import ContentFirst from './components/ContentFirst/ContentFirst'
import ContentSecond from './components/ContentSecond/ContentSecond';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Editor from './components/Editor/Editor';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <LogoWrapp />
        <InsideMenu />
        <ContentFirst />
        <ContentSecond />
        <Banner />
        <Footer />
      </header>
    </div>
  );
}

export default App;
