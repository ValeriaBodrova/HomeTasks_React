import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumsList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => setAlbums(response.data))
      .catch(error => console.error('Error fetching albums:', error));
  }, [userId]);

  return (
    <div>
      <h2>Альбоми користувача</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos/${album.id}`}>Фото</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
