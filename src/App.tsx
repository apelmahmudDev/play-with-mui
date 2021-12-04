import { Container, Typography } from "@mui/material";
import React from "react";
import CheckBoxComp from "./components/CheckBoxComp";
import ThemeCustomization from "./components/ThemeCustomization";
import BorderRadiusCustomize from "./components/BorderRadiusCustomize";
import DarkMode from "./components/DarkMode";
import CheckBreakPoint from "./components/CheckBreakPoint";
import MuiButton from "./components/MuiButton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			...amber,
			...(mode === "dark" && {
				main: amber[300],
			}),
		},
		...(mode === "dark" && {
			background: {
				default: deepOrange[900],
				paper: deepOrange[900],
			},
		}),
		text: {
			...(mode === "light"
				? {
						primary: grey[900],
						secondary: grey[800],
				  }
				: {
						primary: "#fff",
						secondary: grey[500],
				  }),
		},
	},
});

const darkModeTheme = createTheme(getDesignTokens("dark"));

function App() {
	return (
		<ThemeProvider theme={darkModeTheme}>
			<Container>
				<Typography variant="h4" component="h2" color="secondary">
					Material Ui Customization components
				</Typography>
				{/* customize checkbox */}
				<CheckBoxComp />
				<ThemeCustomization />
				<BorderRadiusCustomize />
				<DarkMode />
				<CheckBreakPoint />
				<MuiButton />
			</Container>
		</ThemeProvider>
	);
}

export default App;
