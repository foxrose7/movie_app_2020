import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // https://github.com/serranoarevalo/yts-proxy

    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // this.setState({ movies: movies });
    // this.setState({ movies });
    // this.setState({ movies: movies, isLoading: false });
    this.setState({ movies, isLoading: false });

    console.log(movies);
    // console.log(movies.data.data.movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
