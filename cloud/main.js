
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("averageStars", function(request, response) {
  var query = new Parse.Query("Review");
  query.equalTo("movie", request.params.movie);
  query.find({
    success: function(results) {
      var sum = 0;
      for (var i = 0; i < results.length; ++i) {
        sum += results[i].get("stars");
      }
      response.success(sum / results.length);
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});

Parse.Cloud.define("modifyuser", function(request, response){
  var query = new Parse.Query("Review");
  query.equalTo('objectId', request.params.objectId);
  query.find({
    success: function(results){
      if(results.length>0){
        var user = results[0];
        user.set("SOMEPARAMETER",true);
        }
      }
    }
  });
});
