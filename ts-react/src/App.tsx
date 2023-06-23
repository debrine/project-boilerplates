import React from 'react';

import { AppRoutes } from './AppRoutes';

// TODO make side padding dynamic triggering on a minimum window width
function App() {
  return (
    <div className='App'>
      <header className='App-header'>App Header</header>
      <AppRoutes />
    </div>
  );
}

export default App;
