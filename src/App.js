import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	HomePage,
	Cryptocurrencies,
	Exchanges,
	CryptoDetails,
	News,
} from "./components/index";
import "./App.css";
const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
							<Route path="/exchanges" element={<Exchanges />} />
							<Route path="/crypto/:coinId" element={<CryptoDetails />} />
							<Route path="/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}>
						Cryptomania <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">HomePage</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};
export default App;
