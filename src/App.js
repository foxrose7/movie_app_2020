import React from 'react';
// import Potato from './Potato'

function Food ({fav}){
  // console.log(props);
  // const {fav, something} = props;
  return (
    <div>
      <h3>I like {fav}</h3>
    </div>
  );
  // return <h3>I like {something}</h3>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav='kimch'/>
      <Food fav='japchae'/>
      <Food fav='boolgogi'/>
      <Food fav='bap'/>
    </div>
  );
}

export default App;
