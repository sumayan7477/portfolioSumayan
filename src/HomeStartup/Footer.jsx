import logo from '../assets/imgs/logo-light.png';
const Footer = () => {
    return (
        <footer className="min-footer sub-bg pt-30 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 md-mb15">
                            <div className="logo icon-img-100">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 order-md-3">
                            <div className="text-center">
                                <p className="fz-14">© 2023 InFolio is Proudly Powered by <span
                                        className="underline main-color"><a href="https://themeforest.net/user/ui-themez"
                                            target="_blank">UI-ThemeZ</a></span></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-md-2 md-mb15">
                            <div className="links d-flex justify-content-end">
                                <ul className="rest d-flex align-items-center">
                                    <li>
                                        <a href="page-FAQS.html">FAQ</a>
                                    </li>
                                    <li className="ml-30">
                                        <a href="page-about3.html">Careers</a>
                                    </li>
                                    <li className="ml-30">
                                        <a href="page-contact3.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

    );
};

export default Footer;