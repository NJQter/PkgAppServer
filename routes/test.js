let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    let tabs = [{name:'name1'},{name:'name2'},{name:'name3'}];
    res.render('test',{data:{tabs:tabs}});
});

module.exports = router;