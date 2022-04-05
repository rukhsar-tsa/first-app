import React from "react";
import { Table } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);

    console.log();
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
        "https://jsonplaceholder.typicode.com/photos"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> loading.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Data Table </h1>{" "}
        <Table>
          <thead>
            <tr>
              <th>AlbumId</th>
              <th>ID</th>
              <th>Title</th>
              <th>Url</th>
              <th>ThumbnailUrl</th>
            </tr>
           
          </thead>
          <tbody>
            {items.map((item) => (
                <tr>
                  <td>{item.albumId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.thumbnailUrl}</td>
                </tr>             
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
