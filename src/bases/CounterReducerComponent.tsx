import { useReducer } from "react";
import {
	doIncreaseBy,
	doReset,
} from "../reducers/counter-reducer/actions/actions";
import { CounterState } from "../reducers/counter-reducer/interfaces/interfaces";
import { counterReducer } from "../reducers/counter-reducer/state/counterReducer";

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

export const CounterReducerComponent = () => {
	const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	function increaseBy(amount: number) {
		dispatch(doIncreaseBy(amount));
	}
	return (
		<>
			<h1>Counter Reducer: {state.counter}</h1>
			<h2>Previous :{state.previous}</h2>
			<h2>Changes :{state.changes}</h2>
			<button onClick={() => increaseBy(1)}>+1</button>
			<button onClick={() => increaseBy(5)}>+5</button>
			<button onClick={() => increaseBy(10)}>+10</button>
			<button onClick={() => dispatch(doReset())}>Reset</button>
		</>
	);
};
