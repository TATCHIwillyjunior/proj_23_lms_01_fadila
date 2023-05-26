import React from 'react';
import { render } from 'react-dom';
import Item from "../../actions/types";


class Addstudent  {
  constructor(props) {
    this.state = {
      stundetsInfo: [
       {Student_Name: 'A', Department: 'Adams', Return_Date: 'First', Book:'L23546', Action:'R'},
       {Student_Name: 'C', Department: 'Alison', Return_Date: 'Second', Book:'L25678', Action:'B'},
       {Student_Name: 'B', Department: 'Emily', Return_Date: 'First', Book:'L29456', Action:'R'},
       {Student_Name: 'A', Department: 'Charles', Return_Date: 'Second', Book:'L26521', Action:'R'}
      ]
    };
  }

  render() {
    return (
     <div>
    <h2>Student details</h2>
            <table id='students'>
               <tbody>
                <tr>{
                  Object.keys(this.state.stundetsInfo[0]).map((value) => {
                 return <th key={value.toString()}>{value}</th>
                 })}
              </tr>
                {this.state.stundetsInfo.map((val, index)=> <Item key={index.toString()} details={val} />)}
               </tbody>
            </table>
         </div>)
  }
}

render(<Addstudent />, document.getElementById('root'));
export default Addstudent;