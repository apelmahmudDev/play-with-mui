import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material/";

const ThemeCustomization = () => {
	const themeColor = createTheme({
		palette: {
			error: {
				main: red[500],
			},
		},
	});

	return (
		<ThemeProvider theme={themeColor}>
			<Typography variant="h2" color="error">
				Theme customizations - color
			</Typography>
		</ThemeProvider>
	);
};

export default ThemeCustomization;
