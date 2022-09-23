import profileImage from '../img/logo.png';
import '../App.css';

function Header() {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={profileImage} alt="Logo"  height="67" width="200"/>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <span className="h1 m-0">CyberMark Website Services</span>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
