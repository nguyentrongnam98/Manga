import React from "react";
import classes from "./Loader.module.css";

const loader = props => (
  <div className={classes.container} style={props.addCss ? props.addCss : null}>
    {/* <div className={classes.pathOne} />
    <div className={classes.pathTwo} />
    <div className={classes.pathThree} /> */}

    <div className={classes.ldrOne} />
    <div className={classes.ldrTwo} />
    <div className={classes.ldrThree} />
  </div>

  // <div classNameName={classes.classes.loader} style={classes.props.addStyle}>
  //   Loading...
  // </div>
);

export default loader;
