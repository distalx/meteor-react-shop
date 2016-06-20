import React from 'react'

const Redirect = () => {
  return(
    <div className="col-md-12" style={{minHeight: '600px', paddingTop: '40px'}}>
      <div className="col-md-6 col-md-offset-3" style={{textAlign: 'center'}}>
        <h2>Thank you. Redirecting...</h2>
        <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
            <span className="sr-only">Complete</span>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Redirect
