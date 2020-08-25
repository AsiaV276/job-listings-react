import React, { Component } from 'react';
import './App.css';
import jobs from './data.json'




function New(props) {
  const isNew = props.isNew;
  if (isNew) {
    return <p className="bubble new">New!</p>
  }
  else {
  return null;
}
}
function Featured(props) {
  const isFeatured = props.isFeatured;
  if(isFeatured) {
    return <p className="bubble featured">Featured</p>
  }
  else {
    return null;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      jobs: [],
      filter: [],
    };
  }

  

  
  render() {
    console.log(jobs)
    return (
      <>
      <div id="banner">
        <svg id="mobile-banner" xmlns="http://www.w3.org/2000/svg" width="375" height="156"><path fill="#63BABA" fillRule="evenodd" d="M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"/></svg>
        <svg id="desktop-banner" xmlns="http://www.w3.org/2000/svg" width="1366" height="156"><g fill="#63BABA" fillRule="evenodd"><path d="M470.577 563.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L867.235-19.424c51.441-51.434 134.836-51.434 186.276 0 48.811 48.804 51.304 126.392 7.473 178.135l178.158-178.135c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013l-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0-48.812-48.805-51.304-126.394-7.471-178.138L656.853 563.43c-51.441 51.433-134.836 51.433-186.276 0zM342.268 45.605c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013L528.543 45.605c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237a80.86 80.86 0 01-.013.013L83.85 117.429c-51.44 51.433-134.834 51.433-186.275 0z"/></g></svg>
      </div>

      

      <div id="job-container">
        {jobs.map((job) => (
          <div className="job-item" key={job.id}>
            <div className="job-logo-container">
              {/*<img src={job.logo} alt="" className="job-logo"></img>*/}
              <img src={"/images/photosnap.svg"} className="job-logo"></img>
            </div>
            <div className="center-div">
              <div className="job-item-head">
                  <p className="company-name">{job.company}</p>
                  <New  isNew={job.new}/>
                  <Featured isFeatured={job.featured}/>
                  {/*<p className="bubble new">New!</p>
                  <p className="bubble featured">Featured</p>*/}
              </div>
              <div className="job-title" tabIndex="0">
                <p>{job.position}</p>
              </div>
              <div className="job-details">
                <p>
                  {job.postedAt} &nbsp; &bull; &nbsp;
                  {job.contract} &nbsp; &bull; &nbsp;
                  {job.location}
                </p>
              </div>
            </div>

            <div className="data-tags">
              {/* Role */}
              <div className="tags" data-role={job.role} tabIndex="0">
                {job.role}
              </div>
            
              {/*Level*/}
              <div className="tags" data-level={job.level} tabIndex="0">
                {job.level}
              </div>
              
              {/*Languages*/}
              {console.log(job.languages)}
              
              <div className="tags" data-languages={job.languages} tabIndex="0">{job.languages}</div>
              { /*if(job.languages)
              {job.languages.map((language) => (
                  <div className="tags" data-languages="html">{language}</div>
                ))}*/
              }
              
            </div>
          </div>
        ))}
      </div>
      
      
      </>
    );
  }
}

export default App;
