import React from "react";
import {
	Layout,
	Menu,
	Button,
	Typography,
	Image,
	Space,
	Row,
	Col,
	Card,
} from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
	return (
		<Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
			{/* Header with Logo and Navbar */}
			<Header
				style={{
					display: "flex",
					alignItems: "center",
					backgroundColor: "#002B36",
					padding: "0 20px",
				}}
			>
				<Image
					src="/src/assets/impact-donate-logo.png"
					alt="Logo"
					width={60}
					preview={false}
					style={{ marginRight: "60px", borderRadius: "50%" }}
				/>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["1"]}
					style={{ flex: 1, fontWeight: "bold", fontSize: "16px" }}
					items={[
						{ key: "1", label: "Home" },
						{ key: "2", label: "Charities" },
						{ key: "3", label: "Donation" },
					]}
				/>
			</Header>

			{/* Main Content */}
			<Content
				style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}
			>
				<div
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					{/* Hero Section */}
					<Row
						gutter={[16, 16]}
						align="middle"
						style={{ marginBottom: "40px" }}
					>
						<Col xs={24} md={12}>
							<Title level={1} style={{ color: "#002B36" }}>
								Empowering Developers Worldwide
							</Title>
							<Paragraph
								style={{ fontSize: "18px", color: "#334E58" }}
							>
								Your Bitcoin donations help developers fuel
								innovation and creativity. Together, we are
								shaping the future of technology.
							</Paragraph>
							<Button
								type="primary"
								size="large"
								style={{
									backgroundColor: "#d4f674",
									border: "none",
									color: "#002B36",
								}}
							>
								Donate Now
							</Button>
						</Col>
						<Col xs={24} md={12}>
							<Image
                            width={240}
								src="src/assets/img8.jpg"
								alt="Innovation Illustration"
								preview={false}
								style={{ borderRadius: "8px" }}
							/>
						</Col>
					</Row>

					{/* Mission Section */}
					<Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
						<Col xs={24}>
							<Title level={2} style={{ color: "#002B36" }}>
								Our Mission
							</Title>
							<Paragraph
								style={{ fontSize: "16px", color: "#334E58" }}
							>
								We support talented developers by providing the
								resources they need to bring their ideas to
								life. Your contributions fuel projects, tools,
								and innovations that have the power to change
								the world.
							</Paragraph>
						</Col>
					</Row>

					{/* Highlights Section */}
					<Row gutter={[16, 16]}>
						<Col xs={24} md={8}>
							<Card
								title="Innovative Projects"
								bordered={false}
								style={{
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Help fund groundbreaking projects that solve
									real-world problems using cutting-edge
									technology.
								</Paragraph>
							</Card>
						</Col>
						<Col xs={24} md={8}>
							<Card
								title="Empowering Developers"
								bordered={false}
								style={{
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Your donations give developers the resources
									they need to succeed, from tools to
									education.
								</Paragraph>
							</Card>
						</Col>
						<Col xs={24} md={8}>
							<Card
								title="Shaping the Future"
								bordered={false}
								style={{
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Join a community that’s committed to driving
									innovation and making a lasting impact on
									the world.
								</Paragraph>
							</Card>
						</Col>
					</Row>
				</div>
			</Content>

			{/* Footer */}
			<Footer
				style={{
					textAlign: "center",
					backgroundColor: "#002B36",
					color: "#fff",
					padding: "20px",
				}}
			>
				Impact Donate ©{new Date().getFullYear()} - Empowering
				Developers Worldwide
			</Footer>
		</Layout>
	);
}

export default Home;
