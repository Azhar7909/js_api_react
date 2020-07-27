import React from 'react';
import './App.css';
import ApiMethods from './Api_methods';
import GithubReposeDataFetch from './githubReposeDataFetch';

function App() {
  return (
    <div className="App">
      <h3>Use Api for Data GET, POST, DELETE, UPDATE METHODS <br/>etc</h3><hr/>
      <ApiMethods />
      <GithubReposeDataFetch />
    </div>
  );
}

export default App;
