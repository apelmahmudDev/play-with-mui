import { createTheme } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: yellow[800],
		},
		secondary: {
			main: blue[500],
		},
	},
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					fontSize: "15px",
					textTransform: "none",
					borderRadius: "0",
				},
			},
		},
	},
});

export default theme;
