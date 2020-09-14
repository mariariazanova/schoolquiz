import React, { useFormFields } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
       question: false   
    } 
    
    

    titleChange = (EO) => {
        this.setState({title: EO.target.value});
      }
    subjejctSelect =(EO) => {
        this.setState({subject: EO.target.value});
    }  
    formSelect = (EO) => {
        this.setState({form: EO.target.value});
    }
    addQuestion = (EO)  => {
        const questions = this.state.questions.concat(<Question />);
        this.setState({questions: questions});
        //this.setState({question: true});
        //return (<Question />); 
    }    

    handleSubmit = (EO) => {
        const quizinfo = {title: this.state.title, subject:this.state.subject, form: this.state.form};
        //alert('Отправленные данные: ' + this.state.title+this.state.subject+this.state.form);
        console.log(JSON.stringify(quizinfo));
        this.setState({title: '', subject: '', form: ''});
        EO.preventDefault();
      }

      
    render() {
       {/* let subjectsItems = subjects.map( (item, index) => {
            return <View key={index}>
      <option key={item} value={item}>{item}</option>);
      </View>
      })  */}

        return (
           <React.Fragment>
            <form id="quiz-form" onSubmit={this.handleSubmit}>
              <h3>Создадим ваш новый тест:</h3>  
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
                  {/*  <option key="sub1">русский язык</option>
                    <option key="sub2">русская литература</option>
                    <option key="sub3">белорусский язык</option>
                    <option key="sub4">белорусская литература</option>
                    <option key="sub5">математика</option>
                   */}


                   {subjects.map(function (item) {
                        return <option key={item} value={item}>{item}</option>;
                        })
                    }
                  

                  </select>
                  <select name="form" value={this.state.form} onChange={this.formSelect}>
                    
                    <option key="form">Выберите класс</option>
                    {/*<option key="form1">1</option>
                    <option key="form2">2</option>
                    <option key="form3">3</option>
                    <option key="form4">4</option>
                    <option key="form5">5</option>
                  */}
                    {forms.map(function (item) {
                        return <option key={item} value={item}>{item}</option>;
                        })
                      }
                  
                  </select>
                </div>
              </div>
              <div>
                  <button type="button" onClick={this.addQuestion}>Создать вопрос</button>
                  <div className="inputs">
                       { this.state.questions }
                  </div>
                  
                  {/*
                  {(this.state.question)
                   ? <Question />
                   : null
                  }
                */}
              </div> 
              <input type="submit" value="Отправить" />   
            </form>
           </React.Fragment>
        );
    }

}   



export default Form; 