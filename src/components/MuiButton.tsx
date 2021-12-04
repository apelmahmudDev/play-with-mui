import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MuiButton = () => {
	return (
		<Box>
			<Button
				color="warning"
				component="button"
				disableElevation={true}
				// disableRipple={true}
				endIcon="Hello"
				startIcon="start"
			>
				Mui Button
			</Button>
		</Box>
	);
};

export default MuiButton;
