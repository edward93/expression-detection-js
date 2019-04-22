import React, { Component } from "react";
import * as faceapi from "face-api.js";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.videoRef = undefined;
    this.constraints = { audio: false, video: { width: 1280, height: 720 } };

    this.state = {
      detectionsWithExpressions: undefined
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <video ref={ref => (this.videoRef = ref)} autoPlay />
          <div />
        </header>
      </div>
    );
  }

  async componentDidMount() {
    await faceapi.nets.ssdMobilenetv1.loadFromDisk("../models");
    await this.getStreamFromCamera();
    await this.detectFaces();
  }

  detectFaces = async () => {
    const detectionsWithExpressions = await faceapi
      .detectSingleFace(this.videoRef)
      .withFaceExpressions();
    this.setState({ detectionsWithExpressions });
    console.log(detectionsWithExpressions);
  };

  getStreamFromCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia(
      this.constraints
    );

    // Show the stream from the default camera
    this.videoRef.srcObject = mediaStream;
    // this.setState({ mediaStream });
    console.log("stream has started");
  };
}

export default App;
