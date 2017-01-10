var Model_User = require('./../model/User.js');
var Model_comment = require('./../model/Record.js');

module.exports = {
    Init : function(req, res){
        Model_User.findAll().then(function (results) {
            console.log(results[2].dataValues);
        });
        Model_comment.findById(1).then(function (results) {
            console.log(results.dataValues);
        });
        res.render('vote',{title:'投票页'});  
    }
}; 