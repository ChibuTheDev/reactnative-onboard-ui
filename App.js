import { useState } from 'react';
import React from 'react';
import Onboarding from './Onboard';
import Home from './components/Home';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  function handleOnboardFinish(){
    setShowOnboard(false);
  }
  return(
    <>
     { showOnboard ? <Onboarding handleDone={handleOnboardFinish}/> : <Home/>}
    </>
  )
}

export default App;