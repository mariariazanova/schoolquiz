import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Question.css';
import './styles.css';

var questiontypes = ['одиночный выбор', 'множественный выбор']//, 'с изображением', 'напиши сам'];

{/*function SubjectItem (props) {
     return 
       ( <option>{this.props.value}</option>);
  }

*/}  


class Question extends React.Component {

    state = {
       // keyNumber: 0,
        questiontype: '',
        question: '',
        answers: [],
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:'',
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        correctanswers: [],
    }    

    questionTypeSelect = (EO) => {
        this.setState({questiontype: EO.target.value});//,keyNumber: this.state.keyNumber+1 });
        console.log(this.state.questiontype);
        
        
    }    

    questionChange = (EO) => {
        this.setState({question: EO.target.value});
        console.log(this.state.question);
    }    
    answersChange1 = (EO) => {
        //const answers = this.state.answers.concat(EO.target.value);
        this.setState({answer1: EO.target.value,
            //answers: [...this.state.answers, EO.target.value], 
        });
        console.log(this.state.answer1);
    }
    answersChange2 = (EO) => {
        //this.state.answers.concat(EO.target.value);
        //const answers = this.state.answers.concat(EO.target.value);
        this.setState({answer2: EO.target.value,
                       //answers: this.state.answers, 
        });
        console.log(this.state.answer2);
    }
    answersChange3 = (EO) => {
        //const answers = this.state.answers.concat(EO.target.value);
        this.setState({answer3: EO.target.value,
            //answers: [...this.state.answers,EO.target.value],  
        });
        console.log(this.state.answer3);
    }
    answersChange4 = (EO) => {
        //const answers = this.state.answers.concat(EO.target.value);
        this.setState({answer4: EO.target.value,
            //answers: [...this.state.answers,EO.target.value], 
        });
        console.log(this.state.answer4);
    }

    handleCheckboxChange1 = (EO) => {
        ((this.state.questiontype == questiontypes[0]) && (!this.state.checked2 && !this.state.checked3 && !this.state.checked4))
        ? this.setState({checked1: EO.target.checked})
        : (!(this.state.questiontype == questiontypes[0]))
          ? this.setState({checked1: EO.target.checked})
          : null
        
    }    
    handleCheckboxChange2 = (EO) => {
        ((this.state.questiontype == questiontypes[0]) && (!this.state.checked1 && !this.state.checked3 && !this.state.checked4))
        ? this.setState({checked2: EO.target.checked})
        : (!(this.state.questiontype == questiontypes[0]))
          ? this.setState({checked2: EO.target.checked})
          : null
    }  
    handleCheckboxChange3 = (EO) => {
        ((this.state.questiontype == questiontypes[0]) && (!this.state.checked1 && !this.state.checked2 && !this.state.checked4))
        ? this.setState({checked3: EO.target.checked})
        : (!(this.state.questiontype == questiontypes[0]))
          ? this.setState({checked3: EO.target.checked})
          : null
    }  
    handleCheckboxChange4 = (EO) => {
        ((this.state.questiontype == questiontypes[0]) && (!this.state.checked1 && !this.state.checked2 && !this.state.checked3))
        ? this.setState({checked4: EO.target.checked})
        : (!(this.state.questiontype == questiontypes[0]))
          ? this.setState({checked4: EO.target.checked})
          : null
    }  

    approveQuestion = (EO) => {
        const questiontypeNew = this.state.questiontype;
        const questionNew = this.state.question;

        const answersNew = this.state.answers.concat(this.state.answer1, this.state.answer2, this.state.answer3, this.state.answer4);
        this.setState({answers: answersNew});
        console.log(this.state.answers);
        const correctanswersNew = this.state.correctanswers.concat(this.state.checked1, this.state.checked2, this.state.checked3, this.state.checked4);
        this.setState({correctanswers: correctanswersNew});
       // this.props.cbQuestionType(this.state.questiontype);
        //this.props.cbQuestion(this.state.question);
        //this.props.cbAnswers(answersNew); 
        //this.props.cbCorrectAnswers(correctanswersNew); 
        this.props.cbApproveQuestion(questiontypeNew, questionNew, 
            answersNew, correctanswersNew      
            );

    }

    //questionSubmit = (EO) => {
    //   this.setState({show: this.state.questiontype})
    //}

    render() {
    
    return (
            
                <React.Fragment >
                <div className="quiz-question">
                 <div>
                 <h4>Вопрос №{this.props.countquestion}</h4>
                <label htmlFor="question-type">Тип вопроса:</label>
                <select name="question-type" value={this.state.questiontype} onChange={this.questionTypeSelect}>
                    <option key="type">Выберите тип вопроса</option>
                       {questiontypes.map(function (item) {
                       return <option key={item} value={item}>{item}</option>;
                       })
                    }
                </select>
                {/*<input type="submit" value="Выбрать" onSubmit={this.questionSubmit}/>*/}
                </div>
                <label htmlFor="question">Введите вопрос:</label>
                <input type="text" name="question" value={this.state.question} onChange={this.questionChange} placeholder="Например: 3 + 2 ="/ >
                <label htmlFor="answers">Введите варианты ответов и отметьте галочкой правильные ответы:</label>
                <div className="check-answers">
                    <input type="text" name="answers" value={this.state.answer1} onChange={this.answersChange1} placeholder="Например: 5" />
                    <input type="checkbox" checked={this.state.checked1} onChange={this.handleCheckboxChange1}/>
                </div>
                <div className="check-answers">
                    <input type="text" name="answers" value={this.state.answer2} onChange={this.answersChange2} placeholder="Например: 4" />
                    <input type="checkbox" checked={this.state.checked2} onChange={this.handleCheckboxChange2}/>
                </div>
                <div className="check-answers">
                    <input type="text" name="answers" value={this.state.answer3} onChange={this.answersChange3} placeholder="Например: 3" />
                    <input type="checkbox" checked={this.state.checked3} onChange={this.handleCheckboxChange3} />
                </div>
                <div className="check-answers">
                    <input type="text" name="answers" value={this.state.answer4} onChange={this.answersChange4} placeholder="Например: не знаю" />
                    <input type="checkbox" checked={this.state.checked4} onChange={this.handleCheckboxChange4}/>
                </div>
                
               
               
              
                </div>
                <button type="button" onClick={this.approveQuestion}>Сохранить вопрос</button>   

               
                </React.Fragment>
        );
    }

}
export default Question; 
