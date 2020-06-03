import React, { useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import logo from './Untitled(2).jpg'
import "./total.css";

// const useStyles = makeStyles((theme) => ({
//     root: {
//     	marginTop: 30,
//         alignItems: 'center',
//         color: 'white',
//         display: "flex",
//         float: "left",
//         justifyContent: 'left',
//         textAlign: 'left',
//         height: '30%',
//         width: '30%',
//     },
// }));

const Usage = (props) => {
	return (
		<div className="containerUsage">
			<div className="Title">
			</div>
			<div className="comment">
				<img src={logo} alt={"logo"} />
			</div>
		</div>
	);
}

export default Usage;