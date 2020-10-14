import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './TaskView.css';

import { NavLink } from 'react-router-dom';


var myErrors=[];

class TaskView extends React.PureComponent {
    
    state = {
        countTrueAnswers: 0,
        indexQ: 0,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        isChecked: null,
        answers: [],
        errors:[],
        final:false
      }

      handleCheckboxChange1 = (EO) => {
          this.setState({checked1: EO.target.checked,
                        isChecked: 0
          })
      }    
      handleCheckboxChange2 = (EO) => {
          this.setState({checked2: EO.target.checked,
                        isChecked: 1
          })
      } 
      handleCheckboxChange3 = (EO) => {
          this.setState({checked3: EO.target.checked,                       
                        isChecked: 2
          })
      } 
      handleCheckboxChange4 = (EO) => {
          this.setState({checked4: EO.target.checked,
                        isChecked: 3
          })
      } 

    newQuestion  = (EO) => {
      const answersNew = this.state.answers.concat(this.state.checked1, this.state.checked2, this.state.checked3, this.state.checked4);
      this.setState({answers: answersNew});
      console.log(answersNew);
      console.log(this.props.info.questions[this.state.indexQ].correctanswers);

      const cor_an= this.props.info.questions[this.state.indexQ].correctanswers;
     
      let z = cor_an.findIndex(x => x === true); //ищем № индекса правильного ответа true в массиве правильных ответов
      let cor_an_real=this.props.info.questions[this.state.indexQ].answers[z]; //находим правильный ответ под индексом z в массиве ответов
      console.log(z);
      let u = this.state.isChecked; //находим № индекса данного человеком ответа
      let er_an_real = this.props.info.questions[this.state.indexQ].answers[u];//находим данный человеком ответ в массиве ответов
      console.log(u);
      if(u ==z ){
        this.setState({countTrueAnswers: this.state.countTrueAnswers+1});
        
      } else {
        console.log("+");
        myErrors.push({q: this.props.info.questions[this.state.indexQ].question, ca:cor_an_real, ea:er_an_real});
        this.setState({errors: myErrors});
      }
     
    console.log(this.state.errors);
    this.setState({indexQ: this.state.indexQ+1,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      answers: []
    });

    if (this.state.indexQ+1 == this.props.info.questions.length) {
     this.setState({final:true});
    }

  }  
    

    render() {
    
      //console.log("Task id="+this.props.title+" render"); 
      

        return (
          <div className="task-page">    
            <div className="task-page-block">
             <div className="task-page_inner">
             { (this.props.info)
             ? <div className="">
                 <div className="test-header">
                   <h2>Тест: {this.props.info.title}</h2>
                   <h4>по предмету: {this.props.info.subject}</h4>
                   <h4>для учеников {this.props.info.form}-го класса</h4>
                 </div>
                <div>
                   
                 {/* {this.props.info.questions.map ( (item, index) => (
                        <div key={index} className="question-answers-block">
                          <div className="question-answers-block_inner">
                        <p>Вопрос № {index+1} из {this.props.info.questions.length}</p>
                        <p>{this.props.info.questions[index].question}</p>
                        <ul className="answers-block">
                          {this.props.info.questions[index].answers.map((item2, index2) => (
                           <div className="answer-block" key={index2}>
                           <p>{this.props.info.questions[index].answers[index2]}</p>
                           <input type="checkbox" key={index2} name={index2} onClick={this.Toggle(index2)}/> {/*checked={this.state.isChecked} onChange={this.onToggle(index2)}/> {/*onChange={this.onToggle(this, index, index2)} />{/* onChange={this.onToggle(this, index2)} />  
                           
                           </div>
                          ))} 
                       
                        </ul>
                        </div>  
                       </div>   
                      ))
                  }
                */}

                      
                        <div key={this.state.indexQ} className="question-answers-block">
                          <div className="question-answers-block_inner">
                            {
                              (this.state.final)
                              ? <React.Fragment>
                                  <p>Вы ответили правильно на <span className="green">{this.state.countTrueAnswers}</span> из <span className="red">{this.props.info.questions.length}</span> вопросов (вопроса).</p>
                                  {
                                   (this.state.countTrueAnswers < this.props.info.questions.length)
                                  ? <React.Fragment>
                                      <div>
                                        Вы ответили неправильно на следующие вопросы:
                                        <ul>
                                          {this.state.errors.map((item, i) => {
                                            return <li key={i}><p>{item.q}</p> 
                                            <p>Правильный ответ: {item.ca}</p>
                                            <p> Ваш ответ: {item.ea}</p></li>
                                          })}
                                        </ul>
                                      </div>
                                  </React.Fragment>
                                  : null
                                  }
                                  <div>
                                    <p><NavLink to={"/tasks"} className="">Вернуться на страницу c тестами</NavLink></p>
                                  </div>
                                </React.Fragment>
                              : <React.Fragment>
                                <p>Вопрос № {this.state.indexQ+1} из {this.props.info.questions.length}</p>
                                <p>{this.props.info.questions[this.state.indexQ].question}</p>
                                <ul className="answers-block">
                                  <div className="answer-block" >{/*key={qw-index2}>*/}
                                    <input type="checkbox" checked={this.state.checked1} onChange={this.handleCheckboxChange1} /> 
                                    <p>{this.props.info.questions[this.state.indexQ].answers[0]}</p>
                                  </div>
                                  <div className="answer-block" >{/*key={qw-index2}>*/}
                                    <input type="checkbox" checked={this.state.checked2} onChange={this.handleCheckboxChange2} />  
                                    <p>{this.props.info.questions[this.state.indexQ].answers[1]}</p>
                                  </div>
                                  <div className="answer-block" >{/*key={qw-index2}>*/}
                                    <input type="checkbox" checked={this.state.checked3} onChange={this.handleCheckboxChange3} />  
                                    <p>{this.props.info.questions[this.state.indexQ].answers[2]}</p>
                                  </div>
                                  <div className="answer-block" >{/*key={qw-index2}>*/}
                                    <input type="checkbox" checked={this.state.checked4} onChange={this.handleCheckboxChange4} />  
                                    <p>{this.props.info.questions[this.state.indexQ].answers[3]}</p>
                                  </div>
                                </ul>
                               {                     
                                (this.state.indexQ+1 < this.props.info.questions.length)
                                ? <button type="button" onClick={this.newQuestion}>Следующий вопрос</button>
                                : <button type="button" onClick={this.newQuestion}>Узнать результаты</button>
                                }
                              </React.Fragment>

                            }
                        

                         
                         
                         
                         
                        
                         
                        </div>  
                       </div>   
                      
                  


                </div>
                     
              </div>
             : null  
             }
              </div>
            </div>
          </div>
        );
    } 
}

export default TaskView; 
