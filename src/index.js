import React from "react";
import ReactDOM from "react-dom";

import { Kaleidoscope, Rotate } from "./kaleidoscope.js";

import "./styles.css";

class App extends React.Component {
  state = {
    x: 0,
    y: 0
  };
  render() {
    let onMouseOver = e => {
      console.log(e.clientX, e.clientY);
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };
    let touchMove = e => {
      this.setState({
        x: e.touches[0].clientX / 2,
        y: e.touches[0].clientY / 2
      });
    };

    return (
      <div
        className="App"
        onMouseMove={e => onMouseOver(e)}
        onTouchMove={e => touchMove(e)}
      >
        <Kaleidoscope
          slices={12}
          x={this.state.x}
          y={this.state.y}
          r={65}
          img={
            "https://static-s.aa-cdn.net/img/ios/1187153453/390c18b9fbf163eb0bc3ee1bb3b14aad?v=1"
          }
        />
        <Kaleidoscope
          slices={12}
          x={this.state.x}
          y={this.state.y}
          r={42}
          img={"https://apprecs.org/ios/images/app-icons/256/77/878625143.jpg"}
        />
        <Kaleidoscope
          slices={12}
          x={-this.state.x}
          y={-this.state.y}
          r={30}
          img={
            "https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/03/9c/80/039c806e-8d2f-346f-efee-2db3e549c0c5/source/256x256bb.jpg"
          }
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
