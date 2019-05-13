import React, {Fragment} from 'react';
import compare from "../helpers/checker";


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
          this.state.isAnagram ? (<span>It's an anagram</span>) : (<span>It isn't an anagram</span>)
        )
    }    

    
      render() {
        return (
          <Fragment>
            <form>
              <input 
                type='text' 
                name='firstValue'
                placeholder='First String'
                value={this.state.firstValue}
                onChange={this.handleInputChange}/>
              
              <input 
                type='text' 
                name='secondValue' 
                placeholder='Second String'
                value={this.state.secondValue}
                onChange={this.handleInputChange}/>
            </form>

            <button onClick={this.handleButtonClick} />
              {this.state.showMessage ? this.renderMessage() : ''}               
          </Fragment>
        )
      }
    }


export default Form;