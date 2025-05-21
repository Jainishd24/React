import React from 'react';
import BaseHoc from '../hoc/BaseHoc';
class ClassComponents extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name: "Jainish",
      age: "19"
    }
  }
    render(){
        return (
                <p> This is Class Components</p>
          );
    }
}

export default BaseHoc(ClassComponents);