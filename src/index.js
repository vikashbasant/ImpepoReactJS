import React from "react";
import ReactDOM from "react-dom";

// import youtuber from "./App";
// import youtuber, { favprog, myName, myLast } from "./App";

// both same: default ka naam kuch bhi rkah skta hun.

// Recomended:
import myFav, { favprog, myName, myLast } from "./App";

// not recomended:
// import * as kash from "./App";

ReactDOM.render(
  // one way:
  <>
    <ol>
      <li> vikash </li>
      {/* <li> {youtuber} </li> */}
      <li> {myFav} </li>
      <li> {favprog} </li>
      <li> {myName()} </li>
      <li> {myLast()} </li>
    </ol>
  </>

  // <>
  //   <ol>
  //     <li> Vikash </li>
  //     <li> {kash.default} </li>
  //     <li> {kash.favprog} </li>
  //     <li> {kash.myName()} </li>
  //     <li> {kash.myLast()} </li>
  //   </ol>
  // </>
  
  ,document.getElementById("root")
);
