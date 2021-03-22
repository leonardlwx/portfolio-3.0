   import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>ISU Dining, Supervisor, Ames IA <span>2018-present</span></h2>
                        <p>I am in charged of managing student employees between multiple stations. My task is to delegate tasks effectively
                        between employees to ensure the smooth operation. I also provided training to 20 student employees and worked with cooks and managers to provide
                        quality food and services to 700 customers.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lean Techniques, ARBnb, Ames IA <span> Fall 2020</span></h2>
                        <p>I designed an application which allows landlord to display their apartment through augmented
                        reality. The software used ARCore as an AR plugins and Unity as a platform to create the application.
                        I built an AR Trail features that can guide the user through a path whether it's indoor or outdoor.
                        This application is a game changer as it makes a dull AirBnb process into an exciting one.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Juris Technologies, Software Engineer Intern, KL Malaysia <span> Summer 2019</span></h2>
                        <p>I am responsible for new system features and enhancing the existing features. I applied AGILE and SCRUM project management
                         skills throughout the projects. I worked with a team of 10 on developing database system for a local banking cooperation. Tools
                         and languages I used are Toad by oracle, PHP, CSS, SQL, PLSQL, and javaScript.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>LK Strategics, Collection List, KL Malaysia <span> Fall 2020</span></h2>
                        <p>I designed a new database application that stores client's data in MySQL database and displays it through
                           Java interface. The application improved the ability to store data of over 10 years and present
                        the data in a more user-friendly manner. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at Iowa State University <span>2018-2021</span></h2>
                        <p>I am pursuing my Bachelor of Science in Computer Science. I have taken Artificial Intelligence, Final Year Project, Web Development,
                          Database Management, and Software Testing classes. I am also part of MCN (Malaysian Cultural Night) committee for year 2019.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at Inti International College Subang <span>2017-2018</span></h2>
                        <p>I am pursuing my Bachelor of Science in Computer Science through American Transfer Program.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mathnasium, Mathematics Instructor, Shah Alam Malaysia <span>2017-2018</span></h2>
                        <p>I taught high level mathematics to over 50 students and receive positive feedbacks from parents.
                         I improved my communication skills through interaction with parents and students.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
