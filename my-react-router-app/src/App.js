import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/albums/:userId" element={<AlbumsList />} />
          <Route path="/photos/:albumId" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
