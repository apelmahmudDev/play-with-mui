import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material/";

const ThemeCustomization = () => {
	let theme = createTheme({
		palette: {
			error: {
				main: red[500],
			},
			secondary: {
				main: "#4f4512",
			},
		},
	});

	// change here primary default color
	theme = createTheme(theme, {
		palette: {
			primary: {
				main: theme.palette.error.main,
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h2" color="primary">
				Theme customizations - color
			</Typography>
			<Typography component="h2" variant="h5" color="secondary">
				Hello
			</Typography>
		</ThemeProvider>
	);
};

export default ThemeCustomization;
