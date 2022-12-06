import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Consult from './pages/Consult';
import Spaces from './pages/Spaces';
import Routines from './pages/Routines';

function App() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/discover', element: <Discover /> },
    { path: '/consult', element: <Consult /> },
    { path: '/spaces', element: <Spaces /> },
    { path: '/routines', element: <Routines /> },
  ]);

  return element;
}

export default App;
