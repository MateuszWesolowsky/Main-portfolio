// views
import { About, Contact, Home, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
	return (
		<>
			<Home />
			<About />
			<Projects />
			<Contact />
			<Menu />
		</>
	);
}

export default App;
