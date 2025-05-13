import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([]);


	const crearUsuario = () => {
		fetch('https://playground.4geeks.com/todo/users/CarlosVillalobos', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(response => response.json())
			.then(data => console.log(data.todos));
			// .catch((error)=>console.log(error))
	}

	const traerUsuario = () => {
		fetch('https://playground.4geeks.com/todo/users/CarlosVillalobos', {
			method: "GET",
		})
			.then(response => response.json())
			.then(data => console.log(data));
	}

	useEffect(() => {
		crearUsuario()
		traerUsuario()
	})


	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;