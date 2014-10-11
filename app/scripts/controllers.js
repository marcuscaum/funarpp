angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, UtilFunctions){
	
	$scope.changeMsgSlide = function(){
		$scope.msgSlide = UtilFunctions.changeMsgSlide();
	}

	$scope.goToslide = function(index){
		UtilFunctions.goToSlide(index);
	}

})

.controller('SearchCtrl', function($scope, localStorageService, $http, UtilFunctions) {
	
	$scope.codigos = localStorageService.get('Codes');

	console.log($scope.newCode);
	$scope.alerta = function(){
		UtilFunctions.showAlert('Este é o módulo de busca do aplicativo da Funarpen, com ele você pode buscar pelos códigos que necessita. Lembrando que os últimos códigos digitados ficam armazenados e disponíveis para consulta na pagina de buscas recentes');
	} 

	$scope.saveSearch = function(value) {
		if (value != null) {
			$scope.data = localStorageService.get('Codes');
	        if ($scope.data == null) {
	        	$scope.data = [];
	        };

	        var item = {"cod": value};
	        $scope.data.splice(0, 0, item);
			localStorageService.set("Codes", $scope.data);

			$scope.msg = $scope.data;

		}else{
			return $scope.msg = 'É necessário digitar um valor para realizar a busca.'
		};
	}

})

.controller('RecentesCtrl', function($scope, localStorageService, $timeout, $ionicActionSheet, $rootScope, UtilFunctions){
	
	$scope.codigos = localStorageService.get('Codes');

	$scope.$on('stateChangeSuccess', function() {
    	$scope.loadMore();
  	});
  
	$scope.showOptions = function() {

		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{ text: 'Buscar com este código' }
			],
			destructiveText: 'Delete',
			cancelText: 'Cancel',
			cancel: function() {
			// add cancel code..
			},
			buttonClicked: function() {
				UtilFunctions.goToSlide(2);
			}
		});

		$timeout(function() {
			hideSheet();
		}, 2000);

	};

	$scope.doRefreshRecentes = function() {
        $timeout( function() {
			$scope.codigos = localStorageService.get('Codes');
	        $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };
})

.controller('MainListCtrl', function($scope, $http, $ionicModal, localStorageService, $timeout){
	$http.get('js/JSON/data.min.json').success(function(data){
    	$scope.lista = data;
	})

    $ionicModal.fromTemplateUrl('templates/modal_id.html', function($ionicModal) {
        $scope.modal = $ionicModal;
  		$scope.loadingBoolean = true;

    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });


    $scope.modalGetID = function(id){
		localStorageService.set('cartorio_id', id);
		$scope.modal.show();
		$scope.storageID = localStorageService.get('cartorio_id');
    }
})

.controller('ContatoCtrl', function($ionicModal, $scope){
    
    $ionicModal.fromTemplateUrl('templates/modal_contato.html', function($ionicModal) {
        $scope.modal = $ionicModal;
  		$scope.loadingBoolean = true;

    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.showModal = function(){
    	$scope.modal.show();
    }
})