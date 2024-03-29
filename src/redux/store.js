import { createStore } from 'redux';
import reducer from './reducer/reducer';

// store 는 그냥 만들어지는 게 아니라 store 를 바꿔줄 수 있는 reducer 를 같이 들고 와야 한다.
let store = createStore(reducer);

export default store;