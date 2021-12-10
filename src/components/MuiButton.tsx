import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiButton = () => {
	return (
		<Stack spacing={2} direction="row">
			<Button disableRipple={true} variant="contained">
				Mui Button outlined
			</Button>
			<Button color="secondary">Mui Button contained</Button>
			<Button disableRipple={true} variant="contained" endIcon={<DeleteIcon />}>
				Mui Button
			</Button>
		</Stack>
	);
};

export default MuiButton;
