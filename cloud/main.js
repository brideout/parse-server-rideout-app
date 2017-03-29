
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("updateExpDate", function(request, response){
  var query = new Parse.Query(Parse.User);
  query.equalTo('customer_id', request.params.customerId);
  query.find({
    useMasterKey: true,
    success: function(results){
      if(results.length>0){
        var user = results[0];
        user.setArray("ExpirationDate2",request.params.ExpirationDate);
        user.save().then(
            function(result){
            },
            function(error){
                console.log("Error: " + error.code + " " + error.message);
            });
      }
    },
    error: function(error){
            response.error('query error: '+ error.code + " : " + error.message);
    }
  });
});
