
import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { rootReducer } from './reducers'
import CharacterList from './components/CharacterList'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Rick & Morty API</h1>
        </header>
        <div className="App-header">
          <CharacterList></CharacterList>
        </div>
      </div>
    </Provider>
  );
}

export default App;