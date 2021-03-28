import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who I am?</h2>
                        <p>My name is Leonard Lim Wei Xian. I am currently a senior in 
                        Computer Science in Iowa State University and I will be 
                        graduating this May 2021.</p>

                        <p>I am currently seeking for full time employment in US to 
                        continue my passion in building software. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">

                <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                        <span className="icon">
                            <i className="icon-data" />
                        </span>
                        <div className="desc">
                            <h3>Data Structures & Algorithms</h3>
                            <p>I have knowledge handling large set of data and algorithm that is suitable for each particular problem.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                        <span className="icon">
                            <i className="icon-bulb" />
                        </span>
                        <div className="desc">
                            <h3>Web Development </h3>
                            <p>I have experience building websites with JavaScript,React,HTML,CSS,PHP.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-clock3" />
                    </span>
                        <div className="desc">
                            <h3>Project Management</h3>
                            <p>Through my internship with Juris Technologies, I am 
                            experienced with the usage AGILE and SCRUM management 
                            methodology. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                <span className="icon">
                    <i className="icon-box" />
                </span>
                        <div className="desc">
                            <h3>Augmented Reality</h3>
                            <p>Through my final year project with Lean techniques, I am experienced using ARCore through Unity Application </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
