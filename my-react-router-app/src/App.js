import React from 'react';
import {
  BrowserRouter as Router, Route, Switch 
} from 'react-router-dom';

export const UsersList = () => {
  const users = ['Bob Doe', 'Jane Doe', 'John Doe'];
  const loc = useLocation();
  console.log('location is:', loc);
  return (
    <>
      <h2> Users List </h2>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={`/album/${user.replace(' ', '_')}`}>{user} Album</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Albums = () => {
  const { userName } = useParams();
  const albums = ['Vacation', 'Friends', 'Family'];
  return (
    <>
      <h2>Albums of {userName.replace(/_/, ' ')} </h2>
      <Link to="/">Back to users</Link>
      <ul>
        {albums.map((album) => (
          <li key={album}>
            <Link to={`/album/${userName}/${album}`}>{album}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Photos = () => {
  const { userName, albumId } = useParams();
  const photos = ['One', 'Two', 'Three'];
  return (
    <>
      <h2>
        Photos of {userName.replace(/_/, ' ')}'s {albumId}
      </h2>
      <Link to={`/album/${userName}`}>Back to albums</Link>
      <ul>
        {photos.map((photo) => (
          <li key={photo}>{photo}</li>
        ))}
      </ul>
    </>
  );
};

export const NestedPhotos = () => {
  const { userName, albumId } = useParams();
  const photos = ['One', 'Two', 'Three'];
  const { url } = useRouteMatch();
  console.log('url', url);
  return (
    <>
      <h2>
        Photos of {userName.replace(/_/, ' ')}'s {albumId}
      </h2>
      <Link to={`${url.replace(/\/\w+$/, '')}`}>Back to albums</Link>
      <ul>
        {photos.map((photo) => (
          <li key={photo}>{photo}</li>
        ))}
      </ul>
    </>
  );
};

export const NestedAlbumList = () => {
  const albums = ['Vacation', 'Friends', 'Family'];
  const { userName } = useParams();
  const { url, path } = useRouteMatch();
  //console.log('url and path', url, path);
  const parentPath = url.match(/\/[^\/]+/)[0];
  return (
    <>
      <h2>Albums of {userName.replace(/_/, ' ')} </h2>
      <Link to={parentPath}>Back to users</Link>
      <ul>
        {albums.map((album) => (
          <li key={album}>
            <Link to={`${url}/${album}`}>{album}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${path}/:albumId`}>
          <NestedPhotos />
        </Route>
      </Switch>
    </>
  );
};

export const NestedUsersList = () => {
  const users = ['Bob Doe', 'Jane Doe', 'John Doe'];
  const { url, path } = useRouteMatch();
  return (
    <>
      <h2> Nested Users List </h2>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={`${url}/album/${user.replace(' ', '_')}`}>
              {user} Album
            </Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${path}/album/:userName`}>
          <NestedAlbumList />
        </Route>
      </Switch>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Users List</Link>
          </li>
          <li>
            <Link to="/nested">Nested</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/nested">
            <NestedUsersList />
          </Route>
          <Route path="/album/:userName/:albumId">
            <Photos />
          </Route>
          <Route path="/album/:userName/">
            <Albums />
          </Route>
          <Route path="/">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
