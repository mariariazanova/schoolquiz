import React from 'react';

import './Page_Subjects.css';
import { auth, database, tasks } from "../firebase";


class Page_Subjects extends React.PureComponent {
  
  

  static propTypes = {

  }
  
  state = {
    
      tasks: []
  }
  
  componentDidMount() {
    
    tasks.on('value', snapshot => {
      let allTasks = [];
      snapshot.forEach(snap => {
       //allTasks.push(String (snap.val()));
       allTasks.push(snap.val());
     });
     this.setState({ tasks: allTasks });
    });
      
    
  }


  render() {

    

    return (
    <React.Fragment> 
      <div className="subjectspage">    
        <div className="subjectspage_inner">
          <img src="../images/russian.png" />
          <img src="../images/russian_lit.png" />
          <img src="../images/belarussian.png" />
          <img src="../images/belarussian_lit.png" />
          <img src="../images/maths.png" />
          <img src="../images/english.png" />
          <img src="../images/biology.png" />
          <img src="../images/geography.png" />
          <img src="../images/physics.png" />
          <img src="../images/chemistry.png" />
        </div>
        {
        (this.state.tasks) 
        ? <div className="tasks-info-list">
           {this.state.tasks.map(task => 
             <div key={task.id} id={task.id}>
                {task.title}
             </div>
            )}
          </div>
         
         : null
        }




       {/* <div className="tasks-list">
        {this.state.tasks.map(task => {
          return (
             <div>
               {task.title}
              </div>
          );
        })}*/}
      </div>
       

     
        
     
           
    </React.Fragment>   
    );
    
  }

}
    
export default Page_Subjects;