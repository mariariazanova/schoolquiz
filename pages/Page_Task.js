import React from 'react';

import TaskView from '../components/TaskView';
import { tasks } from "../firebase";

var data=[];

class Page_Task extends React.PureComponent {
 

  state = {
    tasks: [],
    tasks3: []
  }
  
  componentDidMount() {
    
    tasks.on('value', snapshot => {
      var allTasks = [];
      snapshot.forEach(snap => {
      allTasks.push(snap.val());
     });
     this.setState({ tasks: allTasks, tasks3: allTasks });
    });
    
  }

  render() {
    // раз написано <Route path="/task/:taskid" component={Page_Task} />
    // значит Page_Task получит то что в УРЛе после /task/ под именем props.match.params.taskid в виде строки
    
    

    let taskId=this.props.match.params.taskid;
    console.log(taskId);
    //console.log(data);

    //let taskData=data.find( c => c.id==taskId );

    //var taskData2 = tasks.orderByChild('id').equalTo(taskId);


    //let taskData=this.state.tasks3.filter( task => 
    //  {return task.id === taskId});
    
    let taskData=this.state.tasks3.find( task => 
        task.id === taskId);

    console.log(taskData);

    return (
        <TaskView info={taskData} />  
     );
  }
}
export default Page_Task;