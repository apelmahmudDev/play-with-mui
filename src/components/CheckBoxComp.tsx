import { Checkbox } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			primary: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			primary?: string;
		};
	}
}
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
	color: theme.status.primary,
	"&.Mui-checked": {
		color: theme.status.primary,
	},
}));

const theme = createTheme({
	status: {
		primary: blue[500],
	},
});

const CheckBoxComp = () => {
	return (
		<ThemeProvider theme={theme}>
			<CustomCheckbox />
		</ThemeProvider>
	);
};
export default CheckBoxComp;
