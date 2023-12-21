import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
 
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchAlbums = async (userId) => {
    try {
      const response = await fetch( `https://jsonplaceholder.typicode.com/albums?userId=${userId}` );
      const albumsData = await response.json();
      setAlbums(albumsData);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const fetchPhotos = async (albumId) => {
    try {
      const response = await fetch( `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const photosData = await response.json();
      setPhotos(photosData);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => fetchAlbums(user.id)}>Albums</button>
        </div>
      ))}

      <h2>Albums</h2>
      {albums.map(album => (
        <div key={album.id}>
          <p>{album.title}</p>
          <button onClick={() => fetchPhotos(album.id)}>Photos</button>
        </div>
      ))}

      <h2>Photos</h2>
      {photos.map(photo => (
        <div key={photo.id}>
          <p>{photo.title}</p>
          </div>
      ))}
    </div>
  );
}

export default App;