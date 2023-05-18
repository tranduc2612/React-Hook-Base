import React, { useState } from "react";

function DemoUseState() {
	// TH1: Chuyền 1 giá trị cụ thể vào useState
	// const [count, setCount] = useState(1);
	// cach 1
	// return (
	// 	<div style={{ padding: 20 }}>
	// 		<h1> {count} </h1>
	// 		<button onClick={() => setCount(count + 1)}> Click me </button>{" "}
	// 	</div>
	// );

	// cach 2 Sử dụng nó với 1 call back
	// const increaseCount = () => {
	// setCount(count + 1);
	// setCount(count + 1);
	// setCount(count + 1);

	// nếu chạy như này thì sẽ không thể thực hiện được 3 lần cùng 1 lúc nó và nó vẫn chỉ tăng 1
	// vì tại thời điểm này count vẫn bằng 1 và chưa được gắn lại cho nên khi thực hiện thì count + 1 thì luôn chỉ tăng 1 thôi
	// *Lưu ý nếu là Th này thì sau khi setState xong thì component được chưa được re-render lại ngay mà ReactJs đã có 1 kiến trúc lên lịch trình cho trương trình
	// cho nên nó chỉ re-render 1 lần console.log("re-render để kiểm tra")
	// Sử dụng useState với callback
	// setCount((prevCount) => prevCount + 1); // count bây giờ bằng 2
	// setCount((prevCount) => prevCount + 1); // count bây giờ bằng 3
	// setCount((prevCount) => prevCount + 1); // count bây giờ bằng 4
	// lần này thì thằng prevCount + 1 được dùng để được gắn thẳng vào count nên ngay tại thời điểm gọi setCount thì biến count đã thay đổi
	// nhưng mà nó vẫn chỉ re-render 1 lần kể cả khi gọi 3 lần
	// console.log("re-render để kiểm tra");
	// };
	// TH2: Chuyền 1 callback vào initialState - callback trả về cái gì thì nó sẽ lấy cái đấy làm giá trị khởi tạo

	// Nếu ta làm như này thì mỗi khi component được re-render lại thì lại tính lại cái vòng for kia => gây chậm chương trình
	// const data = [100, 200, 300];
	// let sum = 0;
	// 5for (let i = 0; i < data.length; i++) {
	// 	sum += data[i];
	// }
	// const [count, setCount] = useState(sum);

	// nếu ta làm như này thì khi khởi tạo chúng ta chỉ cần chạy 1 lần vòng for đã tính được giá trị khởi tạo vì hàm khởi tạo chỉ chạy 1 lần đầu tiên
	// const data = [100, 200, 300];
	// const [count, setCount] = useState(() => {
	// 	let sum = 0;
	// 	for (let i = 0; i < data.length; i++) {
	// 		sum += data[i];
	// 	}
	// 	return sum;
	// });

	//TH3: Khi ta chuyền 1 object vào trong initialState
	const [info, setInfo] = useState({
		name: "duc",
		age: "19",
	});

	return (
		// <div style={{ padding: 20 }}>
		// 	<h1> {count} </h1>
		// 	<button onClick={increaseCount}> Click me </button>
		// </div>

		// nếu làm như này initialState sẽ bị ghi đè chứ ko thêm ta phải rải toán tử spread info vào object trong setInfo
		<div style={{ padding: 20 }}>
			<h1> {JSON.stringify(info)} </h1>
			<button onClick={() => setInfo({ ...info, uni: "GTVT" })}>
				{" "}
				Click me{" "}
			</button>
		</div>
	);
}

export default DemoUseState;
