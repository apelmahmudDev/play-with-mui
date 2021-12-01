import { Container, Typography } from "@mui/material";
import React from "react";
import CheckBoxComp from "./components/CheckBoxComp";
import ThemeCustomization from "./components/ThemeCustomization";
import BorderRadiusCustomize from "./components/BorderRadiusCustomize";
import DarkMode from "./components/DarkMode";

function App() {
	return (
		<Container>
			<Typography variant="h4" component="h2" color="secondary">
				Material Ui Customization components
			</Typography>
			{/* customize checkbox */}
			<CheckBoxComp />
			<ThemeCustomization />
			<BorderRadiusCustomize />
			<DarkMode />
		</Container>
	);
}

export default App;
