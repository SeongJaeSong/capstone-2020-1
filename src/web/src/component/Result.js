import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, ListItemSecondaryAction } from "@material-ui/core";
import ViewerReact from "./ViewerReact";
import Highlight from "./Highlight";
import ViewerRank from "./ViewerRank";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ImageLoader from "react-load-image";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const Result = (props) => {
  const [posAndNeg, setPosAndNeg] = useState(false);
  const [keword, setKeyword] = useState(false);
  const [high, setHigh] = useState(false);
  const [audioNorm, setAudioNrom] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    setPosAndNeg(false);
    setKeyword(false);
    if (props.url === undefined) {
      setHigh(false);
    } else {
      setHigh(true);
    }
  }, [props]);

  const audio = () => {
    try {
      axios
        .get("http://13.209.112.92:8000/api/SNDnormalize", {
          headers: { "Content-Type": "multipart/form-data" },
          params: {
            url: props.url,
          },
        })
        .then((response) => {
          const data = response.data.image_url;
          console.log(data);
          setImage(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const dashboad = (e) => {
    // console.log(e.target.value);
    console.log(props);
    if (e.target.value === "posAndNeg") {
      setPosAndNeg(true);
      setKeyword(false);
      setAudioNrom(false);
    } else if (e.target.value === "keword") {
      setPosAndNeg(false);
      setKeyword(true);
      setAudioNrom(false);
    } else if (e.target.value === "audioNorm") {
      setPosAndNeg(false);
      setKeyword(false);
      setAudioNrom(true);
      audio();
    } else {
      setPosAndNeg(false);
      setKeyword(false);
      setAudioNrom(false);
    }
  };

  return (
    <div>
      <h3>Analysis results of {props.url}</h3>
      <FormControl component="fieldset">
        <FormLabel component="legend">Options</FormLabel>
        <RadioGroup
          aria-label="options"
          name="customized-radios"
          onChange={dashboad}
        >
          <FormControlLabel
            value="posAndNeg"
            control={<StyledRadio />}
            label="Positive & Negative"
          />
          <FormControlLabel
            value="keword"
            control={<StyledRadio />}
            label="Keword10"
          />
          <FormControlLabel
            value="audioNorm"
            control={<StyledRadio />}
            label="SoundNormalization"
          />
          <FormControlLabel
            value="other"
            control={<StyledRadio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>

      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <Grid xs={3}></Grid>
        {posAndNeg ? (
          <Grid xs={6}>
            <ViewerReact url={props.url}></ViewerReact>
          </Grid>
        ) : (
          <></>
        )}
        {keword ? (
          <Grid xs={6}>
            <ViewerRank
              platform={props.platform}
              videoid={props.videoid}
            ></ViewerRank>
          </Grid>
        ) : (
          <></>
        )}
        {audioNorm ? (
          <Grid xs={6}>
            <img src={image} />
          </Grid>
        ) : (
          <></>
        )}
        <Grid xs={3}></Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <Grid xs={1}></Grid>
        {high ? (
          <Grid xs={10}>
            <Highlight
              platform={props.platform}
              videoid={props.videoid}
              url={props.url}
            ></Highlight>
          </Grid>
        ) : (
          <></>
        )}
        <Grid xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Result;
