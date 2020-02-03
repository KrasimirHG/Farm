import React, { Component } from "react";
import Presentation from "../Presentation";
import Footer from "../Footer";

import Products from "../Products";
import Contact from "../Contact";

//require("dotenv").config();

function Landing() {
	return (
		<div>
			<Presentation />
			<Products />
			<Contact />
			<Footer />
		</div>
	);
}

export default Landing;
