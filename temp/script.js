import React from "react";
import "./styles.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var geocoder = new MapboxGeocoder({
      accessToken:
        "pk.eyJ1IjoiYWJzazEyMzQiLCJhIjoiY2s3Z3Z3azB6MDQyNzNmbzkxd3MwN3hnNyJ9.-paJt9fSR1rw0Wq0LwSmig"
    });

    // function setData(result) {
    //   that.setState({ data: result });
    // }

    geocoder.addTo("#geocoder-container");
    geocoder.on("result", (result) => {
      console.log(result.result);
      this.setState({ data: result.result.center });
      // setData(result);
    });
  }

  display(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <h1>ENter your code here</h1>
        <div
          id="geocoder-container"
          onChange={(e) => {
            this.display();
          }}
        ></div>
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default App;
