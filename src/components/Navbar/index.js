import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
  
function Navigation() {
    return (
            <div className="sidebar">
                <nav className="nav flex-column sticky-top">
                    <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                            </button>
                            <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <NavLink className="nav-link" to="/">Overview</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#github-collapse" aria-expanded="false">
                            Github Implementation
                            </button>
                            <div className="collapse" id="github-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <Link className="nav-link" to="github">Overview</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#install">Installation</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#setup">Set Up</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#development">Development</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#deploy">Deployment</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#branches">CyberMark GIT Branches</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/github#git_commands">GIT Commands</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Coding Standards
                            </button>
                            <div className="collapse" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li className="link-dark rounded">
                                        <NavLink className="nav-link" to="/ada">Accessibility Coding Standards</NavLink>
                                    </li>
                                    <li className="link-dark rounded">
                                        <NavLink className="nav-link" to="/css">CSS Coding Standards</NavLink>
                                    </li>
                                    <li className="link-dark rounded">
                                        <NavLink className="nav-link" to="/html">HTML Coding Standards</NavLink>
                                    </li>
                                    <li className="link-dark rounded">
                                        <NavLink className="nav-link" to="/php">PHP Coding Standards</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#wordpress-collapse" aria-expanded="false">
                            Wordpress
                            </button>
                            <div className="collapse" id="wordpress-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <NavLink className="nav-link" to="/wordpress">Overview</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to="/wordpress-install">Installation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to="/wordpress-settings">Settings</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#custom-collapse" aria-expanded="false">
                            CyberMark Custom Plugins
                            </button>
                            <div className="collapse" id="custom-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <NavLink className="nav-link" to="/cm-plugin">CyberMark Plugin</NavLink>
                                    </li>
                                    <li className="link-dark rounded">
                                        <NavLink className="nav-link" to="/franchise-plugin">Franchise Plugin</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#ssh-collapse" aria-expanded="false">
                            Common SSH Commands
                            </button>
                            <div className="collapse" id="ssh-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <Link  className="nav-link" to="/ssh#top">Overview</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/ssh#server">Connecting to server</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/ssh#aws">AWS</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/ssh#kinsta">Kinsta</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        
                        <li className="nav-item mb-1">
                            <button className="btn btn-toggle align-items-center rounded " data-bs-toggle="collapse" data-bs-target="#launch-collapse" aria-expanded="false">
                            Launch Procedures
                            </button>
                            <div className="collapse" id="launch-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <NavLink className="nav-link" to="/launch">Overview</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
    );
  }
  
  export default Navigation;