import React from 'react';

import './Page_Subjects.css';



class Page_Subjects extends React.PureComponent {
  
  

  static propTypes = {

  }
  
  state = {
    

  }
  

  render() {

    return (
    <React.Fragment> 
      <div className="subjectspage">    
        <div className="subjectspage_inner">
          <img src="../images/russian.png" />
          <img src="../images/russian_lit.png" />
          <img src="../images/belarussian.png" />
          <img src="../images/belarussian_lit.png" />
          <img src="../images/maths.png" />
          <img src="../images/english.png" />
          <img src="../images/biology.png" />
          <img src="../images/geography.png" />
          <img src="../images/physics.png" />
          <img src="../images/chemistry.png" />
        </div>
      </div>
           
    </React.Fragment>   
    );
    
  }

}
    
export default Page_Subjects;