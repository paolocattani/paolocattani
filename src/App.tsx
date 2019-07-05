import React from 'react';
import Header from './components/header';
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab as brandsIcon } from '@fortawesome/free-brands-svg-icons';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';

import './style/App.css';

const App: React.FC = () => {
  library.add(brandsIcon, solidIcon.faRandom, solidIcon.faReply);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
