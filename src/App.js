import Header from './Components/Header/Header';
import Cover from './Components/Cover/Cover';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='light'>
      <Header />
      <Cover />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
