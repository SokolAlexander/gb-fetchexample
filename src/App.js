import './App.css';
import ArticlesList from './components/ArticlesList/ArticlesList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ArticlesList />
      </Provider>
    </div>
  );
}

export default App;
