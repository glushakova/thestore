import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

const Loader = () => {
  return (
    <>
      <Helmet>
        <title>Загрузка</title>
      </Helmet>
      <div className="center">
        <div className="loader"></div>
      </div>
    </>
  );
};

export { Loader };
