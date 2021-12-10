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
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "14px",
					textTransform: "none",
					borderRadius: "0",
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: false,
			},
		},
	},
});

export default theme;
