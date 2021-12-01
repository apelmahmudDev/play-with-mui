import { Container, Typography } from "@mui/material";
import React from "react";
import CheckBoxComp from "./components/CheckBoxComp";
import ThemeCustomization from "./components/ThemeCustomization";

function App() {
	return (
		<Container>
			<Typography variant="h4" component="h2" color="secondary">
				Material Ui Customization components
			</Typography>
			{/* customize checkbox */}
			<CheckBoxComp />
			<ThemeCustomization />
		</Container>
	);
}

export default App;
