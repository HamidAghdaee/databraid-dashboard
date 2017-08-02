import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactGridLayout from 'react-grid-layout';
import './App.css';
import Root from  '@databraid/react-inbox-libs/lib';

var MyFirstGrid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}>{Root}</div>
      </ReactGridLayout>
    )
  }
});

export default MyFirstGrid
