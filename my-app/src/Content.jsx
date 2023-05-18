import React, { useEffect, useState } from "react";
import DemoUseEffect from "./DemoUseEffect";

function Content() {
	const [show, setShow] = useState(false);

	return (
		<div>
			<button type="" onClick={() => setShow(!show)}>
				Click
			</button>
			{show && <DemoUseEffect />}
		</div>
	);
}

export default Content;
