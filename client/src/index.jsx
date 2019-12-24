import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repos from './components/Repos.jsx';
import Link from 'react-router';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  // componentDidMount() {
  //   $.get("http://localhost:1128/repos", (repo, status) => {
  //     this.setState({
  //       repos: repo
  //     })
  //   });
  // }

  search(term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos",
      data: { username: term },
      success: function () {
        console.log('success')
      },
    });

    $.get("http://localhost:1128/repos", (repo, status) => {
      this.setState({
        repos: repo
      })
    });
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} onRepo={this.onRepo} />
      <Repos repos={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));