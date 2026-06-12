import brand1 from '../assets/imgs/brands/b1.png';
import brand2 from '../assets/imgs/brands/b2.png';
import brand3 from '../assets/imgs/brands/b3.png';
import brand4 from '../assets/imgs/brands/b4.png';
import brand5 from '../assets/imgs/brands/b6.png';

const Clients = () => {
    return (
        <section className="clients-carso section-padding pt-0 sub-bg">
                    <div className="container">
                        <div className="sec-bottom mb-100">
                            <div className="sub-bg d-flex align-items-center">
                                <h6 className="fz-14 fw-400">More than <span className="fw-600">200+ companies</span>
                                    trusted us
                                    worldwide</h6>
                            </div>
                        </div>
                        <div className="swiper5" data-carousel="swiper" data-items="5" data-loop="true" data-space="40">
                            <div id="content-carousel-container-unq-clients" className="swiper-container"
                                data-swiper="container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <img src={brand1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <img src={brand2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <img src={brand3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <img src={brand4} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <img src={brand5} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Clients;