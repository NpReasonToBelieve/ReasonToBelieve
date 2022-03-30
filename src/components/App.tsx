import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "@pages/headers/header";
import { Home } from "@pages/home/home";
import { UserAuthContextProvider } from "@contexts/AuthContext";
import "../styles/main.css";

function App() {
	return (
		<UserAuthContextProvider>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				{/* <Route path="about" element={<About />} /> */}
			</div>
		</UserAuthContextProvider>
	);
}

export default App;
