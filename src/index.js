import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";
import "./SeasonDisplay.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, long: null, errorMessage: "" };
  // }

  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    // return (
    //   <div className="loading">
    //     <h1>Loading... </h1>
    //   </div>
    // );

    return <Loader message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
