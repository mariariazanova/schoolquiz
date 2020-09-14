import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Question.css';
import './styles.css';

var questiontypes = ['одиночный выбор', 'множественный выбор', 'с изображением', 'напиши сам'];

{/*function SubjectItem (props) {
     return 
       ( <option>{this.props.value}</option>);
  }

*/}  


class Question extends React.Component {

    state = {
        questiontype: ''
    }    

    questiontypeSelect = (EO) => {
        this.setState({questiontype: EO.target.value});
        console.log(this.state.questiontype);
    }    

    handleSubmit = (EO) => {
       this.setState({show: this.state.questiontype})
    }

    render() {
    {/*
    const subjectItems = questiontypes.map((item) =>
      <SubjectItem key={item.toString()} value={item} />
    );
    */}
    return (
            
                <React.Fragment>
                <div className="quiz-question">
                <label htmlFor="question-type">Тип вопроса:</label>
                <select name="subject" value={this.state.questiontype} onChange={this.questiontypeSelect}>
                    <option key="type">Выберите тип вопроса</option>
                   {/* <option key="type1">одиночный выбор</option>
                    <option key="type2">множественный выбор</option>
                    <option key="type3">с изображением</option>
                    <option key="type4">напиши сам</option>
                   */}
                   {questiontypes.map((item) =>
                       <option key={item} value={item}>{item}</option>
                        )
                    }
                
                
                </select>
                <input type="submit" value="Выбрать" onSubmit={this.handleSubmit}/>
                </div>

                {(this.state.show)
                
                }
                </React.Fragment>
        );
    }

}
export default Question; 
