angular.module('starter.services', [])

.factory('CheckConnection', function(){
    return function(){
        var networkState = navigator.connection.type;
        var states = {};
        var msg = ''; 
        
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        
        if(states[networkState] == states[Connection.NONE])
            msg = " Você não está conectado a nenhuma rede";

        return  msg;
    }
})
.service('UtilFunctions', function($ionicSlideBoxDelegate, $ionicPopup){
  
    this.showAlert = function(template){
        var alertPopup = $ionicPopup.alert({
            template:template
        })
    }

    this.goToSlide = function(sl) {
        $ionicSlideBoxDelegate.slide(sl);
    }

    this.changeMsgSlide = function(){
        var valueSlide = $ionicSlideBoxDelegate.currentIndex();

        if (valueSlide == 0) {
            msg = 'Buscas Recentes'
        }else if(valueSlide == 1){
            msg = 'Pesquisar Código'
        }else if(valueSlide == 2){
            msg = 'Listagem'
        }else{
            msg = 'Contato'
        }
        return msg;
    }
})