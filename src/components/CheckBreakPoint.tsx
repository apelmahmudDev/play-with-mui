import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down("md")]: {
		backgroundColor: theme.palette.secondary.main,
	},
	[theme.breakpoints.up("md")]: {
		backgroundColor: theme.palette.primary.main,
	},
	[theme.breakpoints.up("lg")]: {
		backgroundColor: green[500],
	},
}));

const MyTypography = styled("h2")(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		color: theme.palette.primary.main,
	},
	[theme.breakpoints.up("md")]: {
		color: theme.palette.warning.main,
	},
}));

const CheckBreakPoint = () => {
	return (
		<>
			<Root>
				<Typography variant="h5" component="h2">
					hello
				</Typography>
			</Root>
			<MyTypography>My Typography</MyTypography>
		</>
	);
};

export default CheckBreakPoint;
