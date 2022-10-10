import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./styles/main.css";
import Container from "./components/Container";
import MainGrid from "./components/MainGrid";
import Footer from "./components/Footer";
function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<Container>
				<MainGrid />
			</Container>
			<Footer />
		</>
	);
}

export default App;
