import React, { useFormFields } from 'react';
import ReactDOM from 'react-dom';
import PropTypes, { number } from 'prop-types';
import { requests } from "../firebase";

import './FormRequest.css';
import './styles.css';



class FormRequest extends React.Component {


    state = {
       email: '',
       request: '',
       showForm: true
      
    } 
    

    

    setEmail = (EO) => {
        this.setState({email: EO.target.value});
        console.log(this.state.title);
      }
    
    setRequest = (EO) => {
        this.setState({request: EO.target.value});
        console.log(this.state.form);
    }
    
  
    handleSubmit = (EO) => {
        var newRequestKey = requests.push().key;
        console.log(newRequestKey);
        
        const requestInfoNew = {id: newRequestKey, email: this.state.email, 
                               request:this.state.request};
        this.setState({requestInfo: requestInfoNew, id: newRequestKey});                   
                      
        console.log(JSON.stringify(requestInfoNew));
        const requestInfoNewReady=JSON.stringify(requestInfoNew);

        EO.preventDefault(requestInfoNewReady);

        requests.push(requestInfoNew);
     
      }

    close = (EO) => {
    this.setState({showForm: false});  
    }
      
    render() {
    
      

        return (
           <React.Fragment>
           {    
           (this.state.showForm)    
           ? <form id="new-form" className="new-form" >
              <h2>Форма обратной связи:</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Введите свой email:</label>
                    <input type="email" className="form-control"
                            id="email" value={this.state.email}
                            onChange={this.setEmail}
                            aria-describedby="emailHelp"
                            placeholder="aaaa@mail.ru" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputRequire">Что вы хотите нам сказать:</label>
                    <textarea rows="10" cols="45" name="text" className="form-control"
                            id="text" value={this.state.request}
                            onChange={this.setRequest}
                            placeholder="Мне очень понравилось ваше приложение!" />
                </div>
                <button type="submit" className="btn-submit" onSubmit={this.handleSubmit}>Отправить</button>
                <button type="submit" className="btn-submit" onClose={this.close}>Закрыть</button>   
            </form>
            : null}
           </React.Fragment>

        );
    }

}   



export default FormRequest; 