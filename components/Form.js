import React, { useFormFields } from 'react';
import ReactDOM from 'react-dom';
import PropTypes, { number } from 'prop-types';
import { auth, database, tasks } from "../firebase";

import './Form.css';
import './styles.css';
import Question from './Question.js';


var subjects = ['русский язык', 'русская литература', 'белорусский язык', 'белорусская литература', 'математика', 'английский язык', 'биология', 'география', 'физика','химия'];
var forms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class Form extends React.Component {


    state = {
       title: '',
       subject: '',
       form: '',
       questions: [],
       question: false,
       countquestion: 1,
       questiontype : '',
       answers: [], 
       correctanswers: [],
       questionsInfo: [],
       quizInfo: {},
       id: 1,
    } 
    

    

    titleChange = (EO) => {
        this.setState({title: EO.target.value});
        console.log(this.state.title);
      }
    subjejctSelect =(EO) => {
        this.setState({subject: EO.target.value});
        console.log(this.state.subject);
    }  
    formSelect = (EO) => {
        this.setState({form: EO.target.value});
        console.log(this.state.form);
    }
    addQuestion = (EO)  => {
        const questions = this.state.questions.concat(
        <Question key={this.state.countquestion} cbQuestionType={this.setQuestionType}
                  cbAnswers={this.setAnswers} cbQuestion={this.setQuestion}
                  countquestion={this.state.countquestion} cbCorrectAnswers={this.setCorrectAnswer}
                  cbApproveQuestion={this.saveQuestion}
        />);
        this.setState({questions: questions,
                      countquestion: this.state.countquestion+1 
        });
       
    }
    
    saveQuestion = (questiontype, question, answers, correctanswers) => {
      this.setState({questiontype: questiontype, question: question,
                    answers: answers, correctanswers: correctanswers
      });
      const questionInfo = {questiontype: questiontype,
        question: question, answers: answers,
        correctanswers: correctanswers}; 

      const questionsInfoNew = this.state.questionsInfo.concat(questionInfo); 
      this.setState({questionsInfo: questionsInfoNew}); 
      //console.log(this.state.questionsInfo);
      //console.log(JSON.stringify(questionsInfoNew));


   } 

    handleSubmit = (EO) => {
        var newPostKey = tasks.push().key;
        console.log(newPostKey);
        
        const quizInfoNew = {id: newPostKey, title: this.state.title, 
                            subject:this.state.subject, 
                            form: this.state.form, questions: this.state.questionsInfo};
        this.setState({quizInfo: quizInfoNew, id: newPostKey});                   
                      
        console.log(JSON.stringify(quizInfoNew));
        const quizInfoReady=JSON.stringify(quizInfoNew);

        EO.preventDefault(quizInfoReady);

        tasks.push(quizInfoNew);
        //tasks.push(quizInfoReady);


      }

    clean   = (EO) => {
      this.setState({title: '', subject: '', form: '',
                    questions: [], question: false,
                    countquestion: 1,questiontype : '',
                    answers: [], correctanswers: [],
                    questionsInfo: [],quizInfo: {},
                    id: 1
                  });
    }  

      
    render() {
    
      

        return (
           <React.Fragment>
            <form id="quiz-form" onSubmit={this.handleSubmit}>
              <h2>Форма для создания теста:</h2>  
              <p>(Заполните все предоставленые поля)</p>
              <div className="quiz-details">
                <div className="labels-list">
                  <label htmlFor="title">Название теста:</label>
                  <label htmlFor="subject">Предмет:</label>
                  <label htmlFor="form">Класс:</label>
                </div>
                <div className="inputs-list">
                  <input type="text" name="title" value={this.state.title} onChange={this.titleChange} placeholder="Например:Правописание безударных гласных"/>
                  <select name="subject" value={this.state.subject} onChange={this.subjejctSelect}>
                    <option key="sub">Выберите предмет</option>
                        {subjects.map(function (item) {
                        return <option key={item} value={item}>{item}</option>;
                        })
                    }
                  </select>
                  <select name="form" value={this.state.form} onChange={this.formSelect}>
                    <option key="form">Выберите класс</option>
                     {forms.map(function (item) {
                        return <option key={item} value={item}>{item}</option>;
                       })
                     }
                  </select>
                </div>
              </div>
              <div>
                    <button type="button" onClick={this.addQuestion}>Создать вопрос №{this.state.countquestion}</button>
                    </div>  
                  <div className="inputs">
                       { this.state.questions }
                  </div>
                  
                  
               
              <button type="submit">Отправить</button> 
              <button  type="submit" onClick={this.clean}>Сбросить все поля</button> 
            </form>
           </React.Fragment>

        );
    }

}   



export default Form; 