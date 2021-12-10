import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FieldInput = () => {
	return (
		<Box mt={3}>
			<TextField InputLabelProps={{ shrink: true }} />
		</Box>
	);
};

export default FieldInput;
