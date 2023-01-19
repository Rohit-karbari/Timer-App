import { useEffect, useState } from 'react';
import Clock from './Clock';


function useTime(){
  const [time, setTime] = useState(() => new Date())
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])  
  return time 
}

function App() {
  const time = useTime()

  const [color, setColor] = useState('midnightblue')
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{textAlign: 'center'}}>TIMER</h1>
      <p>
        Pick a color : { ' '}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option>Select you color</option>
          <option value='lightcoral'>lightcoral</option>
          <option value='midnightblue'>midnightblue</option>
          <option value='rebeccapurple'>rebeccapurple</option>
        </select>
      </p>
      <Clock time={time.toLocaleTimeString()} color={color}/>
      <button>like</button>
    </div>
  );
}

export default App;
