import React from 'react';

import './Page_Main.css';

var countClick=0;

class Page_Main extends React.PureComponent {
  
  

  static propTypes = {

  }
  
  state = {
     showMore: false,
     buttonText: 0,
     opacityMainAdd:0

  }
  viewMore = (EO) => {
     countClick+=1;
     console.log (countClick);
     if (countClick % 2 == 0) {
     this.setState ({showMore: false,
                     buttonText: 0,
                     opacityMainAdd: 0

     });

    } else {
      this.setState ({showMore: true,
                      buttonText: 1,
                      opacityMainAdd: 1
      });

    }
  }  


  render() {

    return (
    <React.Fragment> 
      <div className="main_mainpage">    
        <div className="main_mainpage_asideleft">
          <h3>Новости</h3>
        </div>
        <div className="main_mainpage_center">
          <p>Здравствуйте, дорогие друзья! Перед вами приложение для обучения и тестирования знаний школьников. У нас есть готовые тесты для школьников 1-11 классов по многим предметам. Кроме того, вы можете создавать свои тесты. Чтобы получить доступ к полному функционалу, зарегистрируйтесь!
          </p>
          <p>
            Тесты составлены на основании учебных программ по учебным предметам для учреждений общего среднего образования с русским языком обучения и воспитания. 
          </p>
          
          <div className="main_mainpage_button">
            <input type="button" name='' 
                   value= {
                   (this.state.buttonText === 0)
                   ? 'Узнать больше' 
                   : 'Скрыть лишний текст'
                  }
                   onClick={this.viewMore}/>
          </div>
        </div>
        <div className="main_mainpage_asideright">
          <h3>Контакты</h3>
        </div>
      </div>
      <div>{/*
        {
       (this.state.showMore)
        ?*/}<div  className={
          (this.state.opacityMainAdd)
          ?'main_add'
          :'main_add_no'
          }
          > 
          <p>
            Мы очень хотели сделать это приложение полезным и интересным как для учителей, так и для школьников. Надеемся, у нас получилось.
          </p>
          <p>
            Школьники могут проходить тесты без регистрации. Планируется реализовать возможность сохранять результаты пройденных тестов после регистрации ребенка.
          </p>
          <p>
            Учителя также могут иметь доступ ко всем тестам на сайте. Кроме того, каждый учитель может создать свой тест по любому предмету! Макет для создания теста достаточно прост и удобен, но в то же время обладает большим функционалом. Вы можете создавать различные виды тестов (например, текстовый вопрос - выбери один из ответов, текстовый вопрос - запиши ответ, угадай по картинке, соотнеси объекты и т.д.)! После одобрения теста администратом ваш тест станет виден (на выбор только тем, кому вы предоставите на него ссылку, или всем пользователям приложения).
          </p>
          <div>
            <img src="../images/school.png" />
          </div>
         </div> 
        {/*: null
        }*/}
      </div>

      
    </React.Fragment>   
    );
    
  }

}
    
export default Page_Main;