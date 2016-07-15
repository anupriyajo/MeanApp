var ResultItems = React.createClass({

  saveData:function (e) {
    e.preventDefault();
    var data ={
      Title : this.props.Title,
      Year : this.props.Year,
      Rated : this.props.Rated
    };
    //console.log(Title+'+'+Year+'+'+Rated+'+');
    //var url = 'http://localhost:8080/movies/update/_id/'+this.props.imdbID;
    //console.log(url);
    console.log("huhuhuhuh");
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: '/movies/add/',
      data: data
    })
    .done(function(data) {
      console.log("inserted");
      //self.clearForm()
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
    console.log("janam ho gaya");
  },

  render :function(){
    return(
      <div id="insertBox">
      <form id="insertForm"  onSubmit={this.saveData}>
        <li>{this.props.Title}</li>
        <li>{this.props.Year}</li>
        <li>{this.props.Rated}</li>
        <li>{this.props.imdbID}</li>
        <li>{this.props.Released}</li>
        <li>{this.props.Genre}</li>
        <li>{this.props.Runtime}</li>
        <li>{this.props.Director}</li>
        <li>{this.props.Writer}</li>
        <li>{this.props.Actors}</li>
        <li>{this.props.Plot}</li>
        <li>{this.props.Language}</li>
        <li>{this.props.Country}</li>
        <li>{this.props.Awards}</li>
        <li><img height ='20 px' width ='20 px' src= {this.props.Poster}/></li>
        <li>{this.props.Metascore}</li>
        <li>{this.props.imdbRating}</li>
        <li>{this.props.imdbVotes}</li>
        <li>{this.props.Type}</li>
        <li>{this.props.Response}</li>
        <input type="submit" ref= "btn" value="Add to database" />
      </form>
      </div>
    );
  }

});

var ResultList = React.createClass({
  render :function () {
console.log(this.props.SearchResults);
    var resultItems=this.props.SearchResults.map(function(result,i){
  return <ResultItems key={i}  Title= {result.Title}
  Genre= {result.Genre} Director={result.Director} Writer= {result.Writer} Actors= {result.Actors}
Year= {result.Year} Rated= {result.Rated} Released= {result.Released} Runtime= {result.Runtime}
Plot= {result.Plot} Language= {result.Language} Country={result.Country} Awards= {result.Awards}
Poster= {result.Poster} Metascore= {result.Metascore} imdbRating= {result.imdbRating}
imdbVotes= {result.imdbVotes} Type= {result.Type} Response= {result.Response}  imdbID={result.imdbID}
/>});
    return(
      <div>{resultItems}</div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
  console.log("fffffffffffffff");
  return {
    SearchResults : []
  };
},

showResults: function(response){
  this.setState({
      //SearchResults : response.Search
     SearchResults: [response]
  })
  console.log("ttttttttttttttt");
},

search: function (url) {
  console.log("eeeeeeeeeeeeeeee");
  $.ajax({
    type : "GET",
    dataType : 'json',
    url : url,
    success: function(response){
      console.log("nnnnnnnnnnnnn");
      this.showResults(response);
      console.log(response);
    }.bind(this)
  });
},

render:function(){
return(  <div>
  <SearchBox search={this.search}/>
  <ResultList SearchResults={this.state.SearchResults} />
  </div>
);
}
});

var SearchBox = React.createClass({
  createAjax:function(e){
   e.preventDefault();
   var query = ReactDOM.findDOMNode(this.refs.query).value;
   var year = ReactDOM.findDOMNode(this.refs.year).value;
   var category = ReactDOM.findDOMNode(this.refs.category).value;
   var url = 'http://www.omdbapi.com/?t='+query+'&y='+year+'&plot='+category+'&r=json';
    //var url = 'http://www.omdbapi.com/?s='+query+'&y='+year+'&plot='+category+'&r=json';
   //var url = 'http://www.omdbapi.com/?t=harry&y=&plot=short&r=json';
   console.log(url);
   this.props.search(url)
  },

  render : function(){
    return(
    <div id="searchbox">
    <form className=""  onSubmit={this.createAjax}>
    <input type="text" ref="query" placeholder="Search Your movie"  />
    <input type="text" ref="year" placeholder="Year" />
    <select ref="category">
                  <option value="short">short</option>
                  <option value="full">full</option>
              </select>
      <input type="submit" value="submit" />
      </form>
    </div>
  );
  }
});

ReactDOM.render(<App />, document.getElementById('main-container'));
