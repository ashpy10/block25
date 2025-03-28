import { useState } from 'react';

const Color = ({color, onClick, isSelected}) => {
  return (
  <div className={`color ${color} ${isSelected ? "selected" : ""} `} 
  onClick={() => onClick(color)}>
  </div>
  );
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState()
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" onClick={setSelectedColor} isSelected={selectedColor === "yellow"}/>
        <Color color="green" onClick={setSelectedColor} isSelected={selectedColor === "green"}/>
        <Color color="orange" onClick={setSelectedColor} isSelected={selectedColor === "orange"}/>
      </div>
    </div>
  );
};

export default App;
