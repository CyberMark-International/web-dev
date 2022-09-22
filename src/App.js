import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Github from './pages/github';
import ADA from './pages/ada';
import CSS from './pages/css';
import HTML from './pages/html';
import PHP from './pages/php';
import Wordpress from './pages/wordpress';
import WordpressInstall from './pages/wordpress-install';
import WordpressSettings from './pages/wordpress-settings';
import CMPlugin from './pages/cm-plugin';
import FranchisePlugin from './pages/franchise-plugin';
import SSH from './pages/ssh';
import Launch from './pages/launch';
  
function App() {
return (
    <Router>
    <Header />
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 pe-0'>
            <Navbar />
          </div>
          <div className='col-md-9 border-left'>
            <div className='main_content'>
              <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/github' element={<Github/>} />
              <Route path='/ada' element={<ADA/>} />
              <Route path='/css' element={<CSS/>} />
              <Route path='/html' element={<HTML/>} />
              <Route path='/php' element={<PHP/>} />
              <Route path='/wordpress' element={<Wordpress/>} />
              <Route path='/wordpress-install' element={<WordpressInstall/>} />
              <Route path='/wordpress-settings' element={<WordpressSettings/>} />
              <Route path='/cm-plugin' element={<CMPlugin/>} />
              <Route path='/franchise-plugin' element={<FranchisePlugin/>} />
              <Route path='/ssh' element={<SSH/>} />
              <Route path='/launch' element={<Launch/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Router>
);
}
  
export default App;