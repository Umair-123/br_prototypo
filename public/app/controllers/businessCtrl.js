angular.module('businessCtrl', ['businessService'])


	.controller('businessController', function(Business , socketio) {


		var vm = this;

		Business.all()
			.success(function(data) {
				vm.businesses = data;
			});


		vm.createBusiness = function() {

			vm.processing = true;

   
			vm.message = '';
			Business.create(vm.businessData)
				.success(function(data) {
					vm.processing = false;
					//clear up the form
					vm.businessData = {};

					vm.message = data.message;

					
				});

		};

		socketio.on('business', function(data) {
			vm.businesses.push(data);
		})

})
	

.controller('AllBusinessesController', function(Business, socketio) {

	var vm = this;
	Business.allBusinesses()
	.success(function(data){
		vm.businesses = data;
	});

	socketio.on('business', function(data) {
			vm.businesses.push(data);
	});



});