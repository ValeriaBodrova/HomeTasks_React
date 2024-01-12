import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={UsersList} />
          <Route path="/albums/:userId" component={AlbumsList} />
          <Route path="/photos/:albumId" component={PhotosList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
