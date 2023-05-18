import React, { useReducer } from "react";

// initialState
const initState = 0;

// Actions
const UP = "up";
const DOWN = "down";

// reducer
const reducer = (state, action) => {
	console.log("Running here !");
	switch (action) {
		case "up":
			return state + 1;
		case "down":
			return state - 1;
	}
};

function DemoUseReducer() {
	//useReducer nhận vào 2 đối số là hàm thực thi action và giá trị khởi tạo
	// trả về 1 mảng chứa giá trị và 1 hàm để kích hoạt các action đã khai báo

	const [count, dispatch] = useReducer(reducer, initState);
	return (
		<div style={{ padding: 20 }}>
			<button type="" onClick={() => dispatch(UP)}>
				Cộng
			</button>
			<button type="" onClick={() => dispatch(DOWN)}>
				Trừ
			</button>
			<h1>{count}</h1>

			{console.log("render")}
		</div>
	);
}

export default DemoUseReducer;
