import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const useCounter = ({ maxCount = 15 }) => {

	const [counter, setCounter] = useState(5);
	const counterElement = useRef<HTMLHeadingElement>(null);
	const tl = useRef(gsap.timeline());

	function handleClick() {
		setCounter((prevCounter) =>
			prevCounter + 1 <= maxCount ? prevCounter + 1 : maxCount
		);
	}

	useLayoutEffect(()=>{

		if(!counterElement.current) return;
		tl.current.to(counterElement.current, { y: -20, duration: 0.2, ease:"ease.out" })
		tl.current.to(counterElement.current, {
						y: 0,
						duration: 1,
						ease: "bounce.out",
					}).pause();

	},[])

	useEffect(() => {
		tl.current.play(0);
	}, [counter]);

	return {
		handleClick,
		counterElement,
		counter
	};
}

export default useCounter