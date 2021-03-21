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
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>I am from Iowa State University and I am majoring in Computer Science. I love messing with tech and I am super interested in automation tools.</p>

                        <p>I am a senior year student and I am actively looking for job</p>
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
                <span className="heading-meta">What I do?</span>
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
                            <p>I have experience building websites JavaScript,React,HTML,CSS,PHP.</p>
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
                            <p>Through my internship with Juris Technologies, I experienced using AGILE and SCRUM management methodology. </p>
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
                            <p>Through my final year project with Lean techniques, I experienced using ARCore through Unity Application </p>
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
