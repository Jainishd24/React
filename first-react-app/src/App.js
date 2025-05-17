import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionComponents from './components/FunctionComponents';
import {useState} from 'react';

function App() {
  const author='jd';
  const [name,setName] = useState("JD");
  return (
    <div className="App">
      
        <p>Class Components</p>
        <ClassComponents/>
        <br/>
        <p>Function Components</p>
        {/* <FunctionComponents name='Jainish' age={19} author={author}/> */}
        <FunctionComponents name={name} age={19} author={author} setName={setName}/>
    </div>
  );
}

export default App;
