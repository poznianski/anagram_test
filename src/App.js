import React, {Fragment} from 'react';
import Form from './components/form';


class App extends React.Component {
  render() {
    return (
        <Fragment>
          <p style={{
            fontSize: '1.5em', 
            marginLeft: '1.5em',
            }}>Anagram</p>
          <Form />
        </Fragment>
  
    )
  }
}

export default App;