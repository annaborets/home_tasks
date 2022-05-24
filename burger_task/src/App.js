
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Burger from './containers/Burger/Burger'

function App() {
  return (
    <div className="App">
      <Header />
      <Burger />
      <Footer />
    </div >
  );
}

export default App;
