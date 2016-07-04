

module.exports = function(app) {

	app.post('/api/add-data', function(req, res) {
		//console.log('in');
		/*var user = new User();
        user.username = req.body.data;

        user.save(function(err, user){
            if(err){
                return done(err);
            } else {
                res.json({
                    success: true,
                    data: user,
                })
            }
        });*/
	});

	app.get('*', function(req, res) {
        res.render('pages/index');
    });

}; // End Routes
