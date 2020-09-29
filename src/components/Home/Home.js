
import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
       <h1>
          I'm {name}
        </h1>
        {/* <img src={require('./../../sam.png')} width='300'></img>  */}
        <p className='bio'>Website coming soon!</p>
        {/* <p className='bio'>Born and raised in the DMV area, I'm a developer with a ton of experience in the health field. I've worked for the past seven years doing clinical trial research. Along the way, I noticed that healthcare softcare can be prtty rough. I sought out to first learn the design aspect of it, and then the functionality. I'm routinely fascinated by new systems of technology, and am constanting thinking about the future state of hunans.</p> */}
      
      </>
    );
  }
}

export default Home;
