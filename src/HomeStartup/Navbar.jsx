import logo from '../assets/imgs/logo-light.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-crev">
            <div className="container">

                <a className="logo icon-img-100" href="#">
                    <img src={logo} alt="logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                {/* <!-- navbar links --> */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="0"><span className="rolling-text">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="1"><span
                                    className="rolling-text">Services</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="2"><span
                                    className="rolling-text">About</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="3"><span
                                    className="rolling-text">Portfolio</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="4"><span
                                    className="rolling-text">Team</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="5"><span className="rolling-text">Blog</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" data-scroll-nav="6"><span
                                    className="rolling-text">Contact</span></a>
                        </li>
                    </ul>
                </div>

                <div className="topnav">
                    <div className="menu-icon cursor-pointer">
                        <span className="icon ti-align-right"></span>
                    </div>
                </div>
            </div>
        </nav>)
};

export default Navbar;