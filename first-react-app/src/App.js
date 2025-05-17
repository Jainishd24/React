import './App.css';
import ClassComponents from './pages/ClassComponents';
import FunctionComponents from './pages/FunctionComponents';
import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import BaseHoc from './hoc/BaseHoc';

function App() {
  const author='jd';
  const [name,setName] = useState("JD");
  return (
    <Routes>
      <Route path='/' element ={<ClassComponents/>}/>
      <Route path='/functional' element ={<FunctionComponents
      name ={name}
      age = {19}
      author ={author}
      setName ={setName}
      />}/>
    </Routes>
  );
}

export default App;
