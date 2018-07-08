// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//
// const element = <h1>Hello</h1>;
//
// console.log(element);

const appState = {
  title: {
    text: 'React.js title',
    color: 'red'
  },
  content: {
    text: 'React content',
    color: 'blue'
  }
};

const { getState, dispatch, subscribe } = createStore(reducer);

let oldState = getState();
function renderApp(appState, oldState = {}) {
  if (appState === oldState) return;
  console.log('renderApp');
  renderTitle(appState.title, oldState.title);
  renderContent(appState.content, oldState.content);
}

function renderTitle(state, oldState = {}) {
  if (state === oldState) return;
  console.log('renderTitle');
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = state.text;
  titleDOM.style.color = state.color;
}

function renderContent(state, oldState = {}) {
  if (state === oldState) return;
  console.log('renderContent');
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = state.text;
  contentDOM.style.color = state.color;
}

renderApp(appState);

const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT';
const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR';

// function dispatch(action) {
//   switch (action.type) {
//     case UPDATE_TITLE_TEXT:
//       appState.title.text = action.text;
//       break;
//     case UPDATE_TITLE_COLOR:
//       appState.title.color = action.color;
//       break;
//     default:
//       break;
//   }
// }

function reducer(state = appState, action) {
  console.log(action, state);
  switch (action.type) {
    case UPDATE_TITLE_TEXT:
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      };
    case UPDATE_TITLE_COLOR:
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      };
    default:
      return state
  }
}
// dispatch({type: UPDATE_TITLE_TEXT, text: 'Update text'});
// dispatch({type: UPDATE_TITLE_COLOR, color: 'pink'});
// renderApp(appState);

function createStore(reducer) {
  let state;
  let listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);
    return (fn) => {
      listeners = listeners.filter(listener => listener !== fn )
    }
  };
  const getState = () => state;
  const dispatch = (action) => {
    // console.log(action, state);
    state = reducer(state, action);
    // console.log(action, state);
    listeners.forEach(listener => listener())
  };
  dispatch({type: '@init'});
  return { getState, dispatch, subscribe }
}


let sub = () => {
  let newState = getState();
  renderApp(newState, oldState);
  oldState = newState
};

// let unsubscribe = subscribe(sub);
subscribe(sub);
dispatch({type: UPDATE_TITLE_COLOR, color: 'green'});
dispatch({type: UPDATE_TITLE_TEXT, text: 'Hello lili'});
