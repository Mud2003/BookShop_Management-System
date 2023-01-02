const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/items')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:3000/api/items', { params : { id : req.query.id }})
        .then(function(itemdata){
            res.render("update_item", { item : itemdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}