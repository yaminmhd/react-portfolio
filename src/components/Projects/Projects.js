import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="container">
          <h2>Projects</h2>
          <div className="display">
            <div className="project">
              <div className="card card-style">
                <img
                  className="card-img-top"
                  src="screenshots/img1.png"
                  alt="Card 1"
                />
                <div className="card-body">
                  <h5 className="card-title">React Github Finder</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="badge badge-pill badge-primary">
                      React <i className="fab fa-react" />
                    </span>
                  </h6>
                  <p className="card-text">
                    This application allows user to search for a user's Github
                    profile and repositories by keying in a username
                  </p>
                  <div className="card-footer">
                    <a
                      href="https://github.com/yaminmhd/github-react-finder"
                      className="badge badge-success"
                    >
                      View Source
                    </a>
                    <a
                      href="https://mighty-sierra-74080.herokuapp.com/"
                      className="badge badge-primary"
                    >
                      View App
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card card-style">
                <img
                  className="card-img-top"
                  src="screenshots/img2.png"
                  alt="Card 2"
                />
                <div className="card-body">
                  <h5 className="card-title">React Todo List</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    <span class="badge badge-pill badge-primary">
                      React <i class="fab fa-react" />
                    </span>
                  </h6>
                  <p className="card-text">
                    A simple todo list created using React
                  </p>
                  <div class="card-footer">
                    <a
                      href="https://github.com/yaminmhd/todo-list-react-demo"
                      className="badge badge-success"
                    >
                      View Source
                    </a>
                    <a
                      href="https://warm-stream-31920.herokuapp.com/"
                      className="badge badge-primary"
                    >
                      View App
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card card-style">
                <img
                  className="card-img-top"
                  src="screenshots/img3.png"
                  alt="Card 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Yelp Camp</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    <span class="badge badge-pill badge-warning">
                      MongoDB <i class="fas fa-database" />
                    </span>
                    <span class="badge badge-pill badge-primary">
                      JS <i class="fab fa-js-square" />
                    </span>
                    <span class="badge badge-pill badge-info">
                      Node <i class="fab fa-node-js" />
                    </span>
                  </h6>
                  <p className="card-text">
                    This application allows a user to log in, create,edit and
                    delete campsites. Users are also able to leave comments on
                    campsites posted on the application.
                  </p>
                  <div class="card-footer">
                    <a
                      href="https://github.com/yaminmhd/YelpCamp"
                      className="badge badge-success"
                    >
                      View Source
                    </a>
                    <a
                      href="https://aqueous-sierra-62471.herokuapp.com/"
                      className="badge badge-primary"
                    >
                      View App
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card card-style">
                <img
                  className="card-img-top"
                  src="screenshots/img4.png"
                  alt="Card 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Gatsby Blog</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    <span class="badge badge-pill badge-warning">
                      Gatsby{" "}
                      <img
                        style={{ width: "13px", height: "13px" }}
                        src="https://cdn-images-1.medium.com/max/1600/1*t5EnAu3eSWJA0rmZ9v3xuw.png"
                        alt="gatsby"
                      />
                    </span>
                    <span class="badge badge-pill badge-warning">
                      Netlify{" "}
                      <img
                        style={{ width: "13px", height: "13px" }}
                        src="/icons/logomark.png"
                        alt="netlify"
                      />
                    </span>
                  </h6>
                  <p className="card-text">
                    Gatsby blog created using Gatsby and React and deployed to
                    Netlify. Fetching of posts is done using simple GraphQL
                  </p>
                  <div class="card-footer">
                    <a
                      href="https://github.com/yaminmhd/gatsby_blog"
                      className="badge badge-success"
                    >
                      View Source
                    </a>
                    <a
                      href="https://yaminmhd-gatsby-blog.netlify.com/post-one/"
                      className="badge badge-primary"
                    >
                      View App
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card card-style">
                <img
                  className="card-img-top"
                  src="screenshots/img1.png"
                  alt="Card 1"
                />
                <div className="card-body">
                  <h5 className="card-title">myFeedback</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span className="badge badge-pill badge-primary">
                      React <i className="fab fa-react" />
                    </span>
                  </h6>
                  <p className="card-text">
                    Group project in Jumpstart! Training Program. This
                    application allows staff to provide and received feedbacks
                    from colleagues as part of the company's vision of practicing continous
                    improvement. Here we practiced developing the software using TDD, agile delivery, React and Bootstrap for the frontend, NodeJS for the backend and MongoDB for the database.
                  </p>
                  <div className="card-footer">
                    <a
                      href="https://github.com/yaminmhd/github-react-finder"
                      className="badge badge-success"
                    >
                      View Source
                    </a>
                    <a
                      href="https://mighty-sierra-74080.herokuapp.com/"
                      className="badge badge-primary"
                    >
                      View App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
