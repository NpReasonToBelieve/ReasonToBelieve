import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { MainHeader } from "@pages/headers/main-header";
import { Home } from "@pages/home/home";
import { UserAuthContextProvider } from "@contexts/AuthContext";
import "../styles/main.css";

function App() {
	return (
		<UserAuthContextProvider>
			<div className="App">
				<MainHeader />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="about" element={<About />} /> */}
				</Routes>
			</div>
		</UserAuthContextProvider>
	);
}

export default App;
