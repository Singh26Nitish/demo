import './App.css';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import Footer from './Footer';

function App() {
  return (
    <div className="App ">
      <div className='flex'>
      <Sidebar  />
      <HomePage  />
      </div>
      <Footer />
    </div>
  );
}

export default App;
