export type Action =
	| {
			type: "increaseBy";
			payload: {
				value: number;
			};
	  }
	| {
			type: "reset";
	  };

export const doReset = (): Action => ({
	type: "reset",
});

export const doIncreaseBy = (value: number): Action => ({
	type: "increaseBy",
	payload: {
		value,
	},
});
