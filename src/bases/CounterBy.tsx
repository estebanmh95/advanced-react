import { useState } from "react";

interface CounterProps {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: CounterProps) => {
	const [counter, setCounter] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	function handleClick(value: number) {
		setCounter((prev) => ({
			...prev,
			counter: prev.counter + value,
			clicks: prev.clicks + 1,
		}));
	}
	return (
		<>
			<h1>CounterBy: {counter.counter}</h1>
			<h1>Clicks: {counter.clicks}</h1>

			<button onClick={() => handleClick(1)}>+1</button>
			<button onClick={() => handleClick(5)}>+5</button>
		</>
	);
};
