import { Container, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import CheckBoxComp from "./components/CheckBoxComp";
import ThemeCustomization from "./components/ThemeCustomization";
import BorderRadiusCustomize from "./components/BorderRadiusCustomize";
import DarkMode from "./components/DarkMode";
import CheckBreakPoint from "./components/CheckBreakPoint";
import MuiButton from "./components/MuiButton";
import theme from "./theme/theme";
import FieldInput from "./components/FieldInput";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Typography variant="h4" component="h2" color="primary">
					Material Ui Customization components
				</Typography>
				<CheckBoxComp />
				<ThemeCustomization />
				<BorderRadiusCustomize />
				<DarkMode />
				<CheckBreakPoint />
				<MuiButton />
				<FieldInput />
			</Container>
		</ThemeProvider>
	);
}

export default App;
