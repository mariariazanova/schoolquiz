import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../components/Header';
import Task from '../components/Task';
import TaskView from '../components/TaskView';
import Question from '../components/Question';
import Form from '../components/Form';

import PagesLinks from '../pages/PagesLinks';
import Page_Useful from '../pages/Page_Useful';
import Page_Main from '../pages/Page_Main';
import Page_Createtask from '../pages/Page_Createtask';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import publicInfo from '../publicInfo.json';
import schoolquiz from '../schoolquiz1.json';
import schoolquiz11 from '../schoolquiz11.json';

test('внешний вид компонента Header', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
          <Header navbar={publicInfo.NavBarItems} 
          main={publicInfo.Main}
          />
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
     
    //имитируем отображение формы обратной связи из Header
    component.getInstance().showRegForm();
    // получаем снэпшот со всеми клиентами
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot()

});

test('внешний вид компонента Task', () => {

      // создаём тестовую версию компонента
      const component = renderer.create(
            <Task 
            title={schoolquiz.title} subject={schoolquiz.subject} 
            form={schoolquiz.form} id={schoolquiz.id}
            questions={schoolquiz.questions} 
            />
      );
 
      // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
      let componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot();

  });

  test('внешний вид компонента TaskView', () => {

      // создаём тестовую версию компонента
      const component = renderer.create(
            <TaskView  info={schoolquiz11} 
            />
      );
 
      // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
      let componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot();

  });

  test('внешний вид компонента Question', () => {

      // создаём тестовую версию компонента
      const component = renderer.create(
            <Question  key={1} 
            />
      );
 
      // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
      let componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot();

  });

  test('внешний вид компонента Form', () => {

      // создаём тестовую версию компонента
      const component = renderer.create(
            <Form   
            />
      );
 
      // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
      let componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot();

      //имитируем отображение сохранения теста 
      component.getInstance().handleSubmit();
      // получаем снэпшот со всеми клиентами

      link.simulate('click', {
            preventDefault: () => {
            }
           });

      componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot()

  });

  test('внешний вид PagesLinks', () => {

      // создаём тестовую версию компонента
      const component = renderer.create(
        <BrowserRouter>
            <PagesLinks />
        </BrowserRouter>
      );
    
      // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
      let componentTree=component.toJSON();
      expect(componentTree).toMatchSnapshot();
  });

  test('внешний вид Page_Useful', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
      <BrowserRouter>
          <Page_Useful />
      </BrowserRouter>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('внешний вид Page_Main', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
      <BrowserRouter>
          <Page_Main />
      </BrowserRouter>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});


test('внешний вид Page_Createtask', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
     <Provider>  
      <BrowserRouter>
          <Page_Createtask />
      </BrowserRouter>
      </Provider>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});
