import React, { useEffect, useState, createContext } from "react";
import Content2 from "./Content2";
export const dataContext = createContext();

function Content1() {
	const [text, setText] = useState("");
	useEffect(() => {
		setText(
			"Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,"
		);
	}, []);

	return (
		<dataContext.Provider value={text}>
			<div>
				<h1>Tiêu đề</h1>
				<Content2 />
			</div>
		</dataContext.Provider>
	);
}

export default Content1;
