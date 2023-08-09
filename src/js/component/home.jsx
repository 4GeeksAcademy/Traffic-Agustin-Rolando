import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
import Semaforo from "./Semaforo";

//create your first component


const Home = () => {



	return (
		<div className="text-center">
			<Semaforo/>
		</div>
	);
};

export default Home;
