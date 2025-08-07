import React from 'react';
import RootLayout from './components/Layout/RootLayout/RootLayout';
import RootRoute from './routes/RootRoute';
import LeftSideBarLayout from './components/Layout/LeftSidebarLayout/LeftSidebarLayout';
import Posinet from './Pages/posinet/Posinet';


function App(props) {
  return (
      <RootLayout>
        <Posinet />
      </RootLayout>
  );
}

export default App;
