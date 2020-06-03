import { Grid, Link, Typography, Box } from "@material-ui/core";
import React, { useState } from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'left',
        color: 'white',
        justifyContent: 'left',
        textAlign: 'center',
        height: 500,
        width: '50%',
    },
}));

const Usage = (props) => {
	const classes = useStyles();

	<div className="containerusage">
		<div className="Title">
			Usage
		</div>
		<div className="comment">
			영상 편집을 도와줍니다.

			1. 사이트를 처음 방문했다면 먼저 회원가입을 해주세요.
			2. 로그인을 합니다.
			3. URL을 입력하는 곳에 풀영상의 URL을 입력합니다.
				- 지원하는 Platform : ①AfreecaTV ②Twitch ③Youtube
				- 해당 URL은 반드시 실시간 스트리밍 다시보기 영상이어야 합니다.
			4. Input URL 버튼을 누르고 검사 결과를 기다립니다.
		</div>
	</div>
}

export default Usage;