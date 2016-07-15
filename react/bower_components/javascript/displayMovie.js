var ResultItems = React.createClass({

  deleteData:function (e) {
    e.preventDefault();
    var id = this.props._id;
    alert(id);
    console.log(id);
    var urlDel = '/movies/delete/' +id;
    //console.log(Title+'+'+Year+'+'+Rated+'+');
    //var url = 'http://localhost:8080/movies/update/_id/'+this.props.imdbID;
    //console.log(url);
    console.log("huhuhuhuh");
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'DELETE',
      url: urlDel,
      dataType:'json'
    })
    .done(function(data) {
      console.log("deleted");
      //self.clearForm()
    })
    .fail(function(jqXhr) {
      console.log('failed to Delete');
    });
    console.log("janam ho gaya delte");
  },

  /*deleteData:function () {

  },
  /*<li><input type="text" defaultValue={this.props.Title} ref="Title"/></li>
  <li><input type="text" defaultValue={this.props.Year} ref="Year"/></li>
  <li><input type="text" defaultValue={this.props.Rated} ref="Rated"/></li>*/
  render :function(){

    return(
      <div id="deleteBox">
      <form id="deleteForm"  onSubmit={this.deleteData}>
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
        <input type="submit" ref= "btn" value="Delete" />
      </form>
      </div>
    );
  },
});

var ResultList = React.createClass({
  render :function () {
console.log(this.props.SearchResults);
    var resultItems=this.props.SearchResults.map(function(result,i){
      console.log("L68"+result.Title);
  return <ResultItems key={i}  Title= {result.Title}
  Genre= {result.Genre} Director={result.Director} Writer= {result.Writer} Actors= {result.Actors}
Year= {result.Year} Rated= {result.Rated} Released= {result.Released} Runtime= {result.Runtime}
Plot= {result.Plot} Language= {result.Language} Country={result.Country} Awards= {result.Awards}
Poster= {result.Poster} Metascore= {result.Metascore} imdbRating= {result.imdbRating}
imdbVotes= {result.imdbVotes} Type= {result.Type} Response= {result.Response}  imdbID={result.imdbID} _id={result._id}
/>

    });
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
     SearchResults: response
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
//      console.log("L108"+JSON.stringify(response));
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

  /*componentDidMount(){
    console.log("qqqqqqq");
   this.search('https://itunes.apple.com/search?term=fun');
}*/

});

 var SearchBox = React.createClass({
   createAjax:function(e){
    e.preventDefault();
    this.props.search('http://localhost:8080/movies/findAll')
   },

   render : function(){
     return(
     <div id="searchbox">
      <a href="" onClick={this.createAjax} >Movies</a>
     </div>);
   }
 });

ReactDOM.render(<App />, document.getElementById('main-container'));
