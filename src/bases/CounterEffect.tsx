import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT: number = 10;

export const CounterEffect = () => {
	const [counter, setCounter] = useState(5);
	const counterElement = useRef<HTMLHeadingElement>(null);

	function handleClick() {
		setCounter((prevCounter) =>
			prevCounter + 1 <= MAXIMUM_COUNT ? prevCounter + 1 : MAXIMUM_COUNT
		);
	}

	useEffect(() => {
		if (counter < 10) return;
		console.log(
			"%cSe llego al valor maximo",
			"color:red; background-color:black"
		);

		const tl = gsap.timeline();
		tl.to(counterElement.current, { y: -20, duration: 0.2 });
		tl.to(counterElement.current, {
			y: 0,
			duration: 1,
			ease: "bounce.out",
		});

		return () => {
			// console.log("Limpiando el efecto");
		};
	}, [counter]);

	return (
		<>
			<h1>CounterEffect:</h1>
			<h2 ref={counterElement}>{counter}</h2>

			<button onClick={handleClick}>+1</button>
		</>
	);
};
