import React from 'react';

//import Task from '../components/Task';
//import { auth, database, tasks } from "../firebase";
import './Page_Useful.css';

class Page_Useful extends React.PureComponent {
  
    
  state = {
        useful: []
  }
 
  /*

  componentDidMount() {
    
    tasks.on('value', snapshot => {
      let allTasks = [];
      snapshot.forEach(snap => {
       //allTasks.push(String (snap.val()));
       allTasks.push(snap.val());
     });
     this.setState({ tasks: allTasks, tasks3: allTasks });
    });
      
    
  }


  setAllSubjects = () => {
    this.setState({ tasks3: this.state.tasks });
  };

  setMaths = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "математика") });
    this.setState( {tasks3: filteredTasks});
  };


  */
  render() {
    
    console.log("Page_Useful render"); 


    return (
    <React.Fragment> 
      <div className="usefulpage">    
        <div className="usefulpage_center">
        {
        (this.state.useful) 
        ? <React.Fragment> 
            <div className='tasks-table'> 
              <h3>Полезная информация</h3>
              <p>Здесь будет краткая информация на основе школьных программ по предметам.</p>
             
              
          
            </div>
          </React.Fragment> 
        : null
        }
       

        </div>
       
      </div>
       

     
        
     
           
    </React.Fragment>   
    );
    
  }

}
    
export default Page_Useful;