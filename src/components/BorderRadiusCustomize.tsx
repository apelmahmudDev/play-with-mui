import React from "react";
import { Box } from "@mui/material";

const BorderRadiusCustomize = () => {
	return (
		<Box
			component="div"
			sx={{
				bgcolor: "primary.light",
				display: "inline-block",
				p: 2,
				borderRadius: "100%",
			}}
		>
			Hello
		</Box>
	);
};

export default BorderRadiusCustomize;
