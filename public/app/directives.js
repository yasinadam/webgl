// Directives Path
var dir = 'app/views/';

app.directive('head', function() {
	return {
		templateUrl: dir+'head.html',
		controller: 'HomeCtrl',
	}
})

app.directive('navi', function() {
	return {
		templateUrl: dir+'navi.html',
		controller: 'HomeCtrl',
	}
})

app.directive('foot', function() {
	return {
		templateUrl: dir+'foot.html',
		controller: 'HomeCtrl',
	}
})
