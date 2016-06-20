import React from 'react'

import Header from '../components/shared/Header'

export default App = (props) => {
  return (
    <div>
      <Header />

      <div className="main container">
        {props.children}
      </div>
    </div>
  )
}
