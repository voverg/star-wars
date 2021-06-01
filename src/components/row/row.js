import React from 'react';

import './row.css';


const Row = ({left, right}) => (
  <div className="row">
    <div className="col">
      {left}
    </div>
    <div className="col">
      {right}
    </div>
  </div>
);

export default Row;
