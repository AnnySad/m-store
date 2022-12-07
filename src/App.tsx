import React, {createElement as e} from 'react';


function App() {
  return e('div',{className:'container'},[
    e('h1',{className:'fond-bold'}, 'test JSX'),
      e('button',{className:'btn'}, 'Click me !')
  ])
}

export default App;
