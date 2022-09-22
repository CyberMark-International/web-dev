import './sidebar.css';
function Sidebar() {
    return (
        <div id="sidebar">
            <ul classNameName="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Home
                    </button>
                    <div className="collapse show" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#github-collapse" aria-expanded="false">
                    Github Implementation
                    </button>
                    <div className="collapse" id="github-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Coding Standards
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li className="link-dark rounded">
                                <a href="" className="link-dark rounded">Accessibility Coding Standards</a>
                            </li>
                            <li className="link-dark rounded">
                                <a href="" className="link-dark rounded">CSS Coding Standards</a>
                            </li>
                            <li className="link-dark rounded">
                                <a href="" className="link-dark rounded">HTML Coding Standards</a>
                            </li>
                            <li className="link-dark rounded">
                                <a href="" className="link-dark rounded">PHP Coding Standards</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#wordpress-collapse" aria-expanded="false">
                    Wordpress
                    </button>
                    <div className="collapse" id="wordpress-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                            <li><a href="#" className="link-dark rounded">Installation</a></li>
                            <li><a href="#" className="link-dark rounded">Settings</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#custom-collapse" aria-expanded="false">
                    CyberMark Custom Plugins
                    </button>
                    <div className="collapse" id="custom-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <a href="">CyberMark Plugin</a>
                            </li>
                            <li className="link-dark rounded">
                                <a href="">Franchise Plugin</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ssh-collapse" aria-expanded="false">
                    Common SSH Concerns
                    </button>
                    <div className="collapse" id="ssh-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                        </ul>
                    </div>
                </li>
                
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#launch-collapse" aria-expanded="false">
                    Launch Procedures
                    </button>
                    <div className="collapse" id="launch-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>  
    );
}

export default Sidebar;