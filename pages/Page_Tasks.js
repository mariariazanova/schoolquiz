import React from 'react';

import './Page_Tasks.css';
import Task from '../components/Task';
import { auth, database, tasks } from "../firebase";

import  all  from "../images/all.png";
import  russian  from "../images/russian.png";
import  russian_lit  from "../images/russian_lit.png";
import  belarussian  from "../images/belarussian.png";
import  belarussian_lit  from "../images/belarussian_lit.png";
import  maths from "../images/maths.png";
import  english from "../images/english.png";
import  biology from "../images/biology.png";
import  geography from "../images/geography.png";
import  history from "../images/history.png";
import  physics from "../images/physics.png";
import  chemistry from "../images/chemistry.png";

class Page_Tasks extends React.PureComponent {
  
  

  static propTypes = {

  }
  
  state = {
        tasks: [],
        tasks3: []
  }
  
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
  setRussian = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "русский язык") });
    this.setState( {tasks3: filteredTasks});
  };
  setRussianLit = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "русская литература") });
    this.setState( {tasks3: filteredTasks});
  };
  setBelRussian = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "белорусский язык") });
    this.setState( {tasks3: filteredTasks});
  };
  setBelRussianLit = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "белорусская литература") });
    this.setState( {tasks3: filteredTasks});
  };
  setEnglish = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "английский язык") });
    this.setState( {tasks3: filteredTasks});
  };
  setBiology = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "биология") });
    this.setState( {tasks3: filteredTasks});
  };
  setGeography = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "география") });
    this.setState( {tasks3: filteredTasks});
  };
  setHistory = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "история") });
    this.setState( {tasks3: filteredTasks});
  };
  setPhysics = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "физика") });
    this.setState( {tasks3: filteredTasks});
  };
  setChemistry = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.subject == "химия") });
    this.setState( {tasks3: filteredTasks});
  };

  setAllForms = () => {
    this.setState({ tasks3: this.state.tasks });
  };
  set1Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "1") });
    this.setState( {tasks3: filteredTasks});
  };
  set2Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "2") });
    this.setState( {tasks3: filteredTasks});
  };
  set3Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "3") });
    this.setState( {tasks3: filteredTasks});
  };
  set4Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "4") });
    this.setState( {tasks3: filteredTasks});
  };
  set5Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "5") });
    this.setState( {tasks3: filteredTasks});
  };
  set6Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "6") });
    this.setState( {tasks3: filteredTasks});
  };
  set7Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "7") });
    this.setState( {tasks3: filteredTasks});
  };
  set8Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "8") });
    this.setState( {tasks3: filteredTasks});
  };
  set9Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "9") });
    this.setState( {tasks3: filteredTasks});
  };
  set10Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "10") });
    this.setState( {tasks3: filteredTasks});
  };
  set11Form = () => {
    let filteredTasks=this.state.tasks.filter( task => 
              {return (task.form == "11") });
    this.setState( {tasks3: filteredTasks});
  };
 



  render() {
    
    console.log("Page_Tasks render"); 

    var headCode=
    <thead className=''>
       <tr className='head'>        
        <th className='cell'>Название теста</th>
        <th className='cell'>Предмет</th>
        <th className='cell'>Класс</th>
        
      </tr>
    </thead>
   ; 
    var tasksCode=this.state.tasks3.map( task =>
      <Task 
          key={task.id}
          title={task.title} subject={task.subject} form={task.form}
          id={task.id}
          questions={task.questions} 
          
      />
    );


    return (
    <React.Fragment> 
      <div className="subjectspage">    
        <div className="subjectspage_center">
        {
        (this.state.tasks) 
        ? <React.Fragment> 
            <div className='tasks-table'> 
              <h3>Все тесты:</h3>
              <table className='tasks'>
                  {headCode}
                <tbody className='all-tasks'>
                  {tasksCode}
                </tbody>
              </table>
              
          
            </div>
          </React.Fragment> 
        : null
        }
       

        </div>
        <div className="subjectspage_asideright">
        <h3>Выбрать тесты:</h3>
         
          <div className="subjectspage_asideright_subjects">
          <img src={all} alt="все предметы" title="все предметы" onClick = {this.setAllSubjects} />
          <img src={russian} alt="русский язык" title="русский язык" onClick = {this.setRussian}/>
          <img src={russian_lit} alt="русская литература" title="русская литература" onClick = {this.setRussianLit}/>
          <img src={belarussian} alt="белорусский язык" title="белорусский язык" onClick = {this.setBelRussian}/>
          <img src={belarussian_lit} alt="белорусская литература" title="белорусская литература" onClick = {this.setBelRussianLit}/>
          <img src={maths} alt="математика" title="математика" onClick = {this.setMaths}/>
          <img src={english} alt="английский язык" title="английский язык" onClick = {this.setEnglish}/>
          <img src={biology} alt="биология" title="биология" onClick = {this.setBiology}/>
          <img src={geography} alt="география" title="география" onClick = {this.setGeography}/>
          <img src={history} alt="история" title="история" onClick = {this.setHistory}/>
          <img src={physics} alt="физика" title="физика" onClick = {this.setPhysics}/>
          <img src={chemistry} alt="химия" title="химия"  onClick = {this.setChemistry}/>
          </div>
          <div className="subjectspage_asideright_forms">
            <div title="все классы" onClick = {this.setAllForms}>1-11</div>
            <div title="1 класс" onClick = {this.set1Form}>1</div>
            <div title="2 класс" onClick = {this.set2Form}>2</div>
            <div title="3 класс" onClick = {this.set3Form}>3</div>
            <div title="4 класс" onClick = {this.set4Form}>4</div>
            <div title="5 класс" onClick = {this.set5Form}>5</div>
            <div title="6 класс" onClick = {this.set6Form}>6</div>
            <div title="7 класс" onClick = {this.set7Form}>7</div>
            <div title="8 класс" onClick = {this.set8Form}>8</div>
            <div title="9 класс" onClick = {this.set9Form}>9</div>
            <div title="10 класс" onClick = {this.set10Form}>10</div>
            <div title="11 класс" onClick = {this.set11Form}>11</div>
          </div>

        </div>
      </div>
       

     
        
     
           
    </React.Fragment>   
    );
    
  }

}
    
export default Page_Tasks;
