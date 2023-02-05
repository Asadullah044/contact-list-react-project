import './App.css';
import Article from './components/article/Article';
import Cta from './components/cta/Cta';
import Brand from './components/brand/Brand';
import Navbar from './components/navbar/Navbar';
import Feature from './components/feature/Feature'
import {Footer, Blog , Possibility, Features , Whatgpt , Header} from './containers/index.js'


function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
