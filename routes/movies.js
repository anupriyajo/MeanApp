var express = require('express');
var movieModel = require('../models/movieData');
var router = express.Router();

/**********************************************************create api starts*************************************************************************/
router.post('/add',function(req,res){

  var newMovie = new movieModel( {
    Title:req.body.Title,
    Year:req.body.Year,
    Rated:req.body.Rated,
    Released:req.body.Released,
    Runtime:req.body.Runtime,
    Genre:req.body.Genre,
    Director:req.body.Director,
    Writer:req.body.Writer,
    Actors:req.body.Actors,
    Plot:req.body.Plot,
    Language:req.body.Language,
    Country:req.body.Country,
    Awards:req.body.Awards,
    Poster:req.body.Poster,
    Metascore:req.body.Metascore,
    imdbRating:req.body.imdbRating,
    imdbVotes:req.body.imdbVotes,
    imdbID:req.body.imdbID,
    Type:req.body.Type,
    Response:req.body.Response
  });
  newMovie.save(function (err) {
   if (err) {
     console.log(err);
   } else {
     console.log('movie saved');
   }
  });
  res.send(newMovie);
});
/**********************************************************create api ends*************************************************************************/

/**********************************************************delete api starts*************************************************************************/
router.delete('/delete/:id', function (req, res) {
var id = req.params['id'];
movieModel.findById(id,function(err,movie){
return movie.remove(function(err){
  if(err){
    return err;
    console.log("not deleted");
  }else{
    console.log('removed');
    return res.send('delete');
  }
});
});

res.send('movies delete successfully');
});
/**********************************************************delete api ends*************************************************************************/

/**********************************************************update api starts*************************************************************************/
router.put('/update/_id/:id',function(req,res){
var id=req.params['id'];
return movieModel.findById(id, function(err,movie){

   movie.Title=req.body.Title;
   movie.Year=req.body.Year;
   movie.Rated=req.body.Rated;
   movie.Released=req.body.Released,
   movie.Runtime=req.body.Runtime,
   movie.Genre=req.body.Genre,
   movie.Director=req.body.Director,
   movie.Writer=req.body.Writer,
   movie.Actors=req.body.Actors,
   movie.Plot=req.body.Plot,
   movie.Language=req.body.Language,
   movie.Country=req.body.Country,
   movie.Awards=req.body.Awards,
   movie.Poster=req.body.Poster,
   movie.Metascore=req.body.Metascore,
   movie.imdbRating=req.body.imdbRating,
   movie.imdbVotes=req.body.imdbVotes,
   movie.imdbID=req.body.imdbID,
   movie.Type=req.body.Type,
   movie.Response=req.body.Response;

console.log(movie);
 movie.save(function(err){
   if(err){
     return console.log(err);
   }
   else{
     console.log('updated');
   }
   res.send(movie);
 })
});

res.send('movies updated successfully');
});
/**********************************************************update api ends*************************************************************************/

/**********************************************************find all api starts*************************************************************************/
router.get('/findAll', function (req, res) {
  movieModel.find(function(err,movie){
    if(err){
      console.log(err);
    }else{
      return res.send(movie);
    }
  })
});
/**********************************************************find all api ends*************************************************************************/

/**********************************************************find by api starts*************************************************************************/
router.get('/findbyId/_id/:id',function(req,res){

var id=req.params['id'];
return movieModel.findById(id,function(err,movie){
 if(err){
   console.log("Error ");
   return console.log(err);
 }else{
   console.log('success');
   return res.send(movie);
 }
});
 res.send('movie found');
});
/**********************************************************find by api ends*************************************************************************/
module.exports = router;
