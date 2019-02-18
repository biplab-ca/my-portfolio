import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Cloud Portfolio",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "DevSecOps Portfolio",
    'image': {
      'desc': "example screenshot of a project involving devops",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "A Serverless Portfolio",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
