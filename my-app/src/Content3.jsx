import React, { useContext } from "react";
import { dataContext } from "./Content1";

function Content3() {
	const text = useContext(dataContext);

	return <p>{text}</p>;
}

export default Content3;
