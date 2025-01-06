
import './App.css';
import Chat from './Components/Chat';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default App;
