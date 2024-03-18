import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Categories, Recents } from './modules/NavElements';
import { Link } from 'react-router-dom';
import TitleBar from './modules/TitleBar';
function NavBar() {
  return (
    <>
      <div className='navBar'>
        <div className='home'>
          <Link to="/">Home</Link>
        </div>
        <div className='recent'>
          <Link to="/recent">Recent</Link>
        </div>
        <div className='categories'>
          <Link to="/categories">Categories</Link>
        </div>
      </div>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <TitleBar />
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recent" element={<Recents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
