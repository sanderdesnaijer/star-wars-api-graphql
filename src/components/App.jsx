import * as React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("https://swapi.co/api/planets/1/")
      .then(data => data.json())
      .then(result => console.log(result));
  }
  onClick = () => {
    console.log("click");
  };
  render() {
    return (
      <div className="gerrit">
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

export default App;
