import React, { Fragment } from 'react';
import {compare} from '../helpers/checker';
import styles from '../styles/styles';

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
                        <span style={styles.success}>It's an anagram!</span>
                        <img src="/images/checked.png" alt="img" style={styles.icon} />
                    </Fragment>
                ) :
                (
                    <Fragment>
                        <span style={styles.error}>It isn't an anagram!</span>
                        <img src="/images/error.png" alt="img" style={styles.icon} />
                    </Fragment>
                )
    )


    render() {
        return (
            <Fragment>
                <form>
                    <div>
                        <input
                          style={styles.input}
                          type="text"
                          name="firstValue"
                          placeholder="First String"
                          value={this.state.firstValue}
                          onChange={this.handleInputChange}
                        />
                    </div>

                    <div>
                        <input
                          style={styles.input}
                          type="text"
                          name="secondValue"
                          placeholder="Second String"
                          value={this.state.secondValue}
                          onChange={this.handleInputChange}
                        />
                    </div>
                </form>

                <button
                  style={styles.button}
                  onClick={this.handleButtonClick}
                >
                    CHECK
                </button>

                <hr style={styles.hr} />
                <div>
                    {this.state.showMessage ? this.renderMessage() : ''}
                </div>
            </Fragment>
        );
    }
}


export default Form;
