import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import office from './office.png';
import airbnb from './img/airbnb.png';
import coinbase from './img/coinbase.png';
import dribbble from './img/dribbble.png';
import instagram from './img/instagram.png';
import netflix from './img/netflix.png';
import pinterest from './img/pinterest.png';
import discuss from './img/discussing.jpg';
import display from './img/display.jpg';
import women from './img/women.jpg';
import airbnb_r from './img/airbnb_r.png';
import focussed from './img/focussed.png';
import List from './../footer_list';


const Home = () => {
    return (
        <>
            {/* <---Home start---> */}
            <section className="header">
                {/* <div className */}
                <div className="sc_text">
                    <h1>Welcome to <span>Landkit. &nbsp; &nbsp; &nbsp; &nbsp;  </span> Develop anything. </h1>
                    <p className="section_h2">Build a beautiful, modern website with flexible Bootstrap components built from scratch.</p>
                    <div >
                        <button className="sc_btn1">View all pages &nbsp; <i class="fas fa-arrow-right"></i></button>
                        <button className="sc_btn2">Documentation</button>
                    </div>
                </div>
                <div className="sc_ryt">
                    <img className="sc_img" src={office} alt="img" />
                </div>
            </section>

            <div className="dev_card">
                <div className="card_info">
                    <i class="fas fa-sliders-h fa-2x "></i>
                    <h2>Built for developers</h2>
                    <p>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                </div>
                <div className="card_info ">
                    <i class="fas fa-layer-group fa-2x"></i>
                    <h2>Design to be modern</h2>
                    <p>Design with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.</p>
                </div>
                <div className="card_info">
                    <i class="far fa-file-code fa-2x"></i>
                    <h2>Documentation for everything</h2>
                    <p>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
                </div>
            </div>
            <hr />
            <div className="img_logo">
                <div className="img_logo_inside">
                    <img src={airbnb} alt="" />
                    <img src={coinbase} alt="" />
                    <img src={dribbble} alt="" />
                    <img src={instagram} alt="" />
                    <img src={netflix} alt="" />
                    <img src={pinterest} alt="" />
                </div>
            </div>
            {/* <---Form start---> */}
            <div class className="section_form">
                <div className="main_area">
                    <div className="form">
                        <div className="form_card">
                            <img src={discuss} alt="" />
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="button" className="form_btn" value="Download a sample" />
                        </div>
                    </div>
                    <div className="form_info">
                        <div className="form_info_outer">
                            <h1>The most useful resource</h1>
                            <h2>ever created for dev|</h2>
                            <p>Using Lindkit to build your site means never worrying about designing another page or cross browser compatibilty. Our ever-growing library of components and pre-designed layouts will make your life easier. </p>
                            <div className="form_ul">
                                <ul>
                                    <li><i class="fas fa-check-circle form_li_i"></i>Lifetime</li>
                                    <li><i class="fas fa-check-circle form_li_i"></i>Tons of assets</li>
                                </ul>
                                <ul>
                                    <li><i class="fas fa-check-circle form_li_i"></i>Tech support</li>
                                    <li><i class="fas fa-check-circle form_li_i"></i>Integration ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <---Experience Details start---> */}
            <section className="display">
                <div className="display_half">
                    <div className="main_detail">
                        <h1>We have lots of experience</h1>
                        <h2>building Bootstrap themes.</h2>
                        <p>We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.</p>
                    </div>
                    <div className="main_details_para">
                        <div><i class="fas fa-sync-alt fa-2x" style={{ marginRight: '2rem', color: '#515cb1' }}></i></div>
                        <div>
                            <h1>Bootstrap users since the beginning</h1>
                            <p>We've been developing with Bootstrap since it was publicly released in 2011.</p>
                        </div>
                    </div>
                    <div className="main_details_para">
                        <div><i class="fas fa-project-diagram fa-2x" style={{ marginRight: '1.5rem', color: '#515cb1' }}></i></div>
                        <div>
                            <h1>Deep understanding of Bootstrap </h1>
                            <p>We've watched Bootstrap grow up over the years and understand it better than almost anyone.</p>
                        </div>
                    </div>
                </div>
                <div className="display_img">
                    <img src={display} alt="" />
                </div>
            </section>
            {/* <---Our customer start---> */}
            <div className="wave2">
            <section style={{ textAlign: 'center', margin: '2rem 0rem' }}>

                <h1 style={{ margin: '1rem 0rem', fontSize: '1.5rem' }}>Our customer are our biggest fans.</h1>
                <p style={{ margin: '0.4rem 0rem', color: 'rgb(90, 80, 80)', fontWeight: '700' }} >we don't like to brag, but we don't mind letting our customers do it for us.</p>
                <p style={{ margin: '0.4rem 0rem', color: 'rgb(90, 80, 80)', fontWeight: '700' }} >Here are a few nice things folks have said about our themes over the years.</p>

            </section>
            <section className="cust_section" >
            <i class="far fa-arrow-alt-circle-left fa-3x slide_next"  ></i>
                <div className="main_cust_section">
                    <div className="modify_img">
                        <img src={women} alt="" />
                    </div>
                    <div className="cust_section_info">
                        <img src={airbnb_r} alt="" />
                        <p>"Landkit is hands down the most useful front end Bootstrap theme I've ever used. i can't wait to use it again for my next project."</p>
                        <p style={{ fontSize: "0.75rem", color: "grey" }}>DAVE GAMACHE</p>
                    </div>
                </div>
                <i class="far fa-arrow-alt-circle-right fa-3x slide_next"></i>
            </section>
            {/* <---Bussiness Detail start---> */}
            <section className="bussiness">
                <div className="bussiness_card">
                    <div className="bussiness_split">
                        <h1>Stay focused on your bussiness.</h1>
                        <h2>Lets us handle the design.</h2>
                        <p>You have a bussiness to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you.</p>
                        <ul>
                            <li><h1>100%</h1><p>Satisfaction</p></li>
                            <li><h1>24/7</h1><p>Support</p></li>
                            <li><h1>100k+</h1><p>Sales</p></li>

                        </ul>
                    </div>
                    <div className="bussiness_card_img">
                        <img src={focussed} alt="" />
                    </div>
                </div>
            </section>
            </div>
            {/* <---Pricing start---> */}
            <div className="wave">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <section style={{ textAlign: 'center', margin: '2rem 0rem', width: "40%" }}>
                    <h1 style={{ margin: '1rem 0rem', fontSize: '2rem' }}>Fair, simple pricing for all.</h1>
                    <p style={{ margin: '0.4rem 0rem', color: 'rgb(90, 80, 80)', fontWeight: '700', lineHeight: "1.75rem" }} >All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                    <p style={{ margin: '0.4rem 0rem', color: 'grey', fontSize: "0.85rem", fontWeight: "700" }} >Annual <span><i class="fas fa-toggle-on"></i></span> Monthly</p>
                </section>
            </div>
            <div className="maine_card">
                <div className="maine_card_outer">
                    <div className="first_card">
                        <p className="first_card_p">STANDARD</p>
                        <h1><span>$</span>29<span>/mo</span></h1>
                        <p style={{ fontSize: "0.8rem", color: "grey", marginBottom: "1.5rem" }}>per seat</p>
                        <ul>
                            <li><i class="fas fa-check-circle form_li_i"></i>Rich, responsive landing pages</li>
                            <li><i class="fas fa-check-circle form_li_i"></i>100+ styled components</li>
                            <li><i class="fas fa-check-circle form_li_i"></i>Flexible, simple license</li>
                            <li><i class="fas fa-check-circle form_li_i"></i>Speedy build tooling</li>
                            <li><i class="fas fa-check-circle form_li_i"></i>6 months free support included</li>
                        </ul>
                        <button>Get it now</button>
                    </div>
                    <div className="sec_card">
                        <p className="sec_card_p">ENTERPRISE</p>
                        <div className="sec_card_para">
                            <p >We offer variables pricing with discount for larger organizations. Get in touch with us and we'll figure out something that works for everyone. </p>
                        </div>
                        <button>Contact us</button>
                    </div>
                </div>
            </div>
            {/* <---FAQ start---> */}
            <div className="some_ques_outer">
                <div className="some_ques">
                    <ul>
                        <li>
                            <h1><i class="fas fa-question-circle form_li_i"></i> Can I use Landkit for my clients?</h1>
                            <p>Absolutely. The Bootstrap Themes license allow you to build a website for personal use or for a client.</p>
                        </li>
                        <li>
                            <h1><i class="fas fa-question-circle form_li_i"></i> Do I get free updates?</h1>
                            <p>Yes. We update all of our themes with Bootstrap update, plus are constantly adding new components, pages, and feature to our themes.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1><i class="fas fa-question-circle form_li_i"></i> Is there ia money back guarantee?</h1>
                            <p>Yup! Bootstrap Themes come with a satisfaction guarantee, Submit a return and get your money back.</p>
                        </li>
                        <li>
                            <h1><i class="fas fa-question-circle form_li_i"></i> Does it work with Rails? React? Laravel?</h1>
                            <p>Yes. Landkit has basic CSS/JS files you can include. if you want to enable deeper customization, you can intergrate it into your assets pipeline or build processes.</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <---Footer start---> */}
            <section style={{ textAlign: 'center', margin: '2rem 0rem' }}>
                <h1 style={{ margin: '1rem 0rem', fontSize: '2rem',color:"white" }}>Get Landkit and save your time.</h1>
                <p style={{ margin: '0.2rem 0rem', color: '#a7b1c4', fontWeight: '700', wordSpacing: "0.1rem" }} >Stop wasting time trying to do it the "right way" and build a site from scratch.</p>
                <p style={{ margin: '0.2rem 0rem', color: '#a7b1c4', fontWeight: '700', wordSpacing: "0.1rem" }} >Landkit is faster, easier, and you still have complete control.</p>
                <button className="upper_footer"> Buy it now  &nbsp; <i class="fas fa-arrow-right"></i></button>
            </section>
            </div>
            <footer>
                <div className="footer_card">
                    <ul className="footer_logo">
                        <li> <div ><NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className="footer_logo1">Landkit.</h1></NavLink></div></li>
                        <li className="logo_p">A better way to build.</li>
                        <li><span><i class="fab fa-instagram social_icon"></i></span><span><i class="fab fa-facebook-square social_icon"></i></span><span><i class="fab fa-twitter social_icon"></i></span><span><i class="fab fa-pinterest social_icon"></i></span></li>
                    </ul>
                    <div className="details">
                        {List.map((val) =>
                            <div className="links_info"> <h1>{val.title}</h1>
                                <ul className="links_info1">
                                    {val.links.map((val1, idx) =>
                                        <li >
                                            <NavLink to="/" className="footer_link">{val1.link}</NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
