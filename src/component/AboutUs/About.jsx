import React from 'react';
import office from './../home/office.png';


const About = () => {
    return (
        <div>
            <section className="header">
                {/* <div className */}
                <div className="sc_text">
                    <h1>Welcome to <span>About &nbsp; &nbsp; &nbsp; &nbsp;  </span> Page. </h1>
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
        </div>
    )
}

export default About
