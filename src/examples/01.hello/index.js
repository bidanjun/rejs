import React from 'react';

function App() {
  //unlike react native,div should set display to 'flex'
  return (
    <div style={{      
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#44bb44",
      display:'flex'
    }} >
      <span>hello world!</span>
    </div>
  );
}

export default App;
