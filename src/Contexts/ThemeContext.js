import { Component, createContext } from "react";

const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
// 	state = {
// 		isLightTheme: true,
// 		// lightTheme: { bg: "white", ui: "#282c34" },
// 		// darkTheme: { bg: "#282c34", ui: "white" },
// 	};

// 	render() {
// 		return (
// 			<ThemeContext.Provider value={{ ...this.state }}>
// 				{this.props.children}
// 			</ThemeContext.Provider>
// 		);
// 	}
// }

export default ThemeContext;
