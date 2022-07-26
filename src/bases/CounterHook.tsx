import useCounter from "../hooks/useCounter";
const MAXIMUM_COUNT: number = 10;

export const CounterHook = () => {
	const { counterElement, counter, handleClick } = useCounter({
		maxCount: MAXIMUM_COUNT,
	});
	return (
		<>
			<h1>CounterHook:</h1>
			<h2 ref={counterElement}>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</>
	);
};
