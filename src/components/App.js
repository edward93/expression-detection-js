import React, { Component } from "react";
import * as faceapi from "face-api.js";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.intervalHr = undefined;

    this.videoRef = undefined;
    this.imgRef = undefined;
    this.constraints = { audio: false, video: { width: 1280, height: 720 } };

    this.state = {
      detectionsWithExpressions: undefined,
      bestPrediction: undefined
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="video">
            <video ref={ref => (this.videoRef = ref)} autoPlay />
          </div>
          <div>
            {this.state.detectionsWithExpressions && (
              <div>
                <span>
                  {`Expression: ${
                    this.state.detectionsWithExpressions.expressions[0]
                      .expression
                  } - ${(
                    this.state.detectionsWithExpressions.expressions[0]
                      .probability * 100
                  ).toFixed(2)} %`}
                </span>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }

  async componentDidMount() {
    await faceapi.loadSsdMobilenetv1Model("/models");
    await faceapi.loadFaceExpressionModel("/models");
    await this.getStreamFromCamera();
    this.intervalHr = setInterval(this.detectFaces, 3000);
  }

  sortPredictions = (a, b) => {
    if (a.probability > b.probability) return -1;
    if (b.probability > a.probability) return 1;
    return 0;
  };

  detectFaces = async () => {
    console.log("detecting faces...");
    const detectionsWithExpressions = await faceapi
      .detectSingleFace(this.videoRef)
      .withFaceExpressions();
    detectionsWithExpressions.expressions = detectionsWithExpressions.expressions.sort(
      this.sortPredictions
    );
    this.setState({ detectionsWithExpressions });
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

  componentWillUnmount() {
    clearInterval(this.intervalHr);
  }
}

export default App;
