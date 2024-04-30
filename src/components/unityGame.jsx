import React, { Fragment, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function GameApp() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "/WebGL/build/WebGL.loader.js",
    dataUrl: "/WebGL/build/WebGL.data",
    frameworkUrl: "/WebGL/build/WebGL.framework.js",
    codeUrl: "/WebGL/build/WebGL.wasm",
  });

  function setNumber() {
    sendMessage("textNumber", "SetID", 100);
    console.log("button clicked")
  }


  return (
    <Fragment>
      <Unity unityProvider={unityProvider} 
      style={{height:600, width: 1000}}
      />
      
      <button onClick={setNumber} >Send ID</button>
    </Fragment>
  );
}
export default GameApp;