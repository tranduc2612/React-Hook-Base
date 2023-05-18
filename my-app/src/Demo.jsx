import React, { useState, useEffect } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

function Demo() {
	// Cách 1
	const formik = useFormik({
		initialValue: {
			name: "",
			pass: "",
		},
		initialError: {},
	});

	return (
		<div style={{ padding: "20px", fontSize: "1.6rem" }}>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="text"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
				<input
					type="password"
					name="pass"
					value={formik.values.pass}
					onChange={formik.handleChange}
				/>
				<button>Đăng nhập</button>
			</form>
		</div>
	);
}

export default Demo;
