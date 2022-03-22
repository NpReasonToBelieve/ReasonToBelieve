import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/home/home";
import "../styles/main.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</div>
	);
}

export default App;
