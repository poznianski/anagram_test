import React, {Fragment} from 'react';
import Form from './components/Form';
import './App.css'

class App extends React.Component {
  render() {
    return (
        <Fragment>
          <h1>Anagram</h1>
          <Form />
        </Fragment>

    )
  }
}

export default App;
