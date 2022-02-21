import Millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";
const HomePage = () => {
	const { data, isFetching } = useGetCryptoQuery();
	const globalStats = data?.data?.stats
	if(isFetching) return "loading..."
	return (
		<>
			<Typography.Title level={2} className="heading">
				Global Crypto Stats
			</Typography.Title>
			<Row>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value={globalStats.total} />
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Exchanges"
						value={Millify(globalStats.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Market Cap"
						value={Millify(globalStats.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total 24h Volume"
						value={Millify(globalStats.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title="Total Markets"
						value={Millify(globalStats.totalMarkets)}
					/>
				</Col>
			</Row>
		</>
	);
};
export default HomePage;
