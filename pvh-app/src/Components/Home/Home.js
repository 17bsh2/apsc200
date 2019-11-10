import "./Home.css";

import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// import GridContainer from "Components/Grid/GridContainer.js";
import  HomeInfo  from "./HomeInfo.js";

const useStyles = makeStyles({
	card: { minWidth: 275 },
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: { fontSize: 14 },
	pos: { marginBottom: 12 }
});

export default function Home() {
	const classes = useStyles();
	return (
		<div>
			<Grid
				direction="column"
				justify="center"
				alignItems="center"
			>
				<HomeInfo name="danger" condition="green" meaning=""/>
				<HomeInfo name="coa" condition="green" meaning=""/>
				<HomeInfo name="status" condition="green" meaning=""/>
				
			</Grid>
		</div>
	);
}
