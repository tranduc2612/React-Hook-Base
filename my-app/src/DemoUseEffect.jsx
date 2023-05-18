import React, { useEffect, useState } from "react";

function DemoUseEffect() {
	const [title, setTile] = useState("");
	const [data, setData] = useState([]);
	const [num, setNum] = useState(100);
	// useEffect(() => {
	// 	console.log("useEffect thực thi !");
	// });

	useEffect(() => {
		const id = setInterval(() => {
			setNum((preNum) => preNum - 1);
			console.log("run !");
		}, 1000);
		console.log("useEffect run !");
		// console.log("useEffect thực thi !");
		return () => {
			console.log("unmount");
			// clearInterval(id);
			// được chạy trước khi component được unmount
		};
	}, []);

	// useEffect(() => {
	// 	console.log(num);
	// }, [num]);

	return (
		<div style={{ padding: 20 }}>
			<button type="" onClick={() => setNum(num - 1)}>
				Cộng
			</button>
			<h1>{num}</h1>
			{console.log("render")}
		</div>
	);
}

export default DemoUseEffect;
