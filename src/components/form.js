import React, {Fragment} from 'react';
import compare from "../helpers/checker";
import styles from '../styles/styles';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
      firstValue: '', 
      secondValue: '', 
      showMessage: false, 
      isAnagram: false,
    };
  }

    handleInputChange = event => {
    const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }


    handleButtonClick = () => {
      const { firstValue, secondValue } = this.state;
      this.setState ({
        showMessage: true,
        isAnagram: compare(firstValue, secondValue)
      });
    }
    
    renderMessage = () =>{     
        return (
            this.state.isAnagram ? 
            (<span style={styles.success}>It's an anagram!</span>) :

            (<span style={styles.error}>It isn't an anagram!</span>)
        )
    }    

    
    render() {
      return (
        <Fragment>
          <form>
            <div>
              <input 
                style={styles.input}
                type='text' 
                name='firstValue'
                placeholder='First String'
                value={this.state.firstValue}
                onChange={this.handleInputChange}/>
            </div>
            
            <div>
              <input 
                style={styles.input}
                type='text' 
                name='secondValue' 
                placeholder='Second String'
                value={this.state.secondValue}
                onChange={this.handleInputChange}/>
            </div>
          </form>

          <div>
            <button 
                style={styles.button} 
                onClick={this.handleButtonClick}>
            CHECK
            </button>
            
          </div>
          <hr style={{borderStyle:'solid'}}></hr>

          <div>
          {this.state.showMessage ? this.renderMessage() : ''}
          </div>
        </Fragment>
      )
    }
  }


export default Form;