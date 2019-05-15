import React, { Fragment } from 'react';
import {compare} from '../helpers/checker';
import '../components/Form.css';
import '../helpers/constants/messages';
import Constants from '../helpers/constants/messages';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            showMessage: false,
            isAnagram: false,
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleButtonClick = () => {
        const { firstValue, secondValue } = this.state;
        this.setState({
            showMessage: true,
            isAnagram: compare(firstValue, secondValue),
        });
    }

    renderMessage = () => (
            this.state.isAnagram ?
                (
                    <Fragment>
                        <img src="/images/checked.png" alt="img" className='icon' />
                        <span className='success'>{Constants.SUCCESS_MESSAGE}</span>
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <img src="/images/error.png" alt="img" className='icon' />
                        <span className='error'>{Constants.ERROR_MESSAGE}</span>
                    </Fragment>
                )
    )


    render() {
        return (
            <Fragment>
                <form>
                    <div>
                        <input
                          className='input'
                          name="firstValue"
                          placeholder="First String"
                          value={this.state.firstValue}
                          onChange={this.handleInputChange}
                        />
                    </div>

                    <div>
                        <input
                          className='input'
                          name="secondValue"
                          placeholder="Second String"
                          value={this.state.secondValue}
                          onChange={this.handleInputChange}
                        />
                    </div>
                </form>

                <button
                  className='button'
                  onClick={this.handleButtonClick}
                >CHECK
                </button>

                <hr className='hr' />
                <div>
                    {this.state.showMessage ? this.renderMessage() : ''}
                </div>
            </Fragment>
        );
    }
}


export default Form;
