import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Charities from "./pages/Charities";
import Donation from "./pages/Donation";
import TransactionHistory from "./pages/TransactionHistory";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/charities" element={<Charities />} />
				<Route path="/donation" element={<Donation />} />
				<Route
					path="/transaction-history"
					element={<TransactionHistory />}
				/>
			</Routes>
		</Router>
	);
}

export default App;