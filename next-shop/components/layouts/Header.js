
import Image from "next/image";
import heroImg from "@/public/images/hero-bg.jpg"
import Slider from "./Slider";

export default function Header() {




    return (
        <div>
            <div className="hero_area">
                <div className="bg-box">
                    <Image src={heroImg} alt="hero-image" priority />
                </div>
                {/* <!-- header section strats --> */}
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    webprog.io
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">صفحه اصلی</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="menu.html">منو</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">درباره ما</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">تماس باما</a>
                                    </li>
                                </ul>
                                <div className="user_option">
                                    <a className="cart_link position-relative" href="cart.html">
                                        <i className="bi bi-cart-fill text-white fs-5"></i>
                                        <span className="position-absolute top-0 translate-middle badge rounded-pill">
                                            3
                                        </span>
                                    </a>
                                    <a href="login.html" className="btn-auth">
                                        ورود
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- end header section --> */}
                <Slider />
            </div>
        </div>
    )
}