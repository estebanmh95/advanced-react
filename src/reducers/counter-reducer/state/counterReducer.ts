import { Action } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
	state: CounterState,
	action: Action
): CounterState => {
	switch (action.type) {
		case "increaseBy":
			return {
				...state,
				counter: state.counter + action.payload.value,
				previous: state.counter,
				changes: state.changes + 1,
			};
		case "reset":
			return {
				counter: 0,
				previous: 0,
				changes: 0,
			};
		default:
			return state;
	}
};
