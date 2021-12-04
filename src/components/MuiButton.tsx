import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiButton = () => {
	return (
		<Stack spacing={2} direction="row">
			<Button size="large" color="secondary" variant="outlined">
				Mui Button outlined
			</Button>
			<Button size="medium" color="secondary" variant="contained">
				Mui Button contained
			</Button>
			<Button
				endIcon={<DeleteIcon />}
				size="small"
				color="error"
				variant="text"
			>
				Mui Button
			</Button>
		</Stack>
	);
};

export default MuiButton;
