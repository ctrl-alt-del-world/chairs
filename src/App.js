import React from 'react';
import Helmet from 'react-helmet'
import './index.css';

function App (props) {
  return (
    <div className="App">
      <Helmet>
        <title>Chairrrrrrrrrs</title>
      </Helmet>
      {props.children}
    </div>
  );
}

export default App;
