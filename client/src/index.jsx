import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos",
      // Maybe I need to turn this into Object.
      data: JSON.stringify({ term }),
      success: function () {
        console.log('success')
      },
    });
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));