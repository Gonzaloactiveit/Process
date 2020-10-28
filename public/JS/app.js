var app = angular.module('appProcess', [
    'ngRoute'
    
  ]);
  
  
  
  app.config(['$routeProvider', function($routeProvider) {
      
    $routeProvider
        .when('/', {
          templateUrl: 'public/views/login-inicio.html'
        })

        .when('/funcionario', {
          templateUrl: 'public/views/inicioFuncionario.html'
        })

        .when('/disenador', {
          templateUrl: 'public/views/inicioDisenador.html'
        })

        .when('/admin', {
          templateUrl: 'public/views/inicioAdmin.html'
        })

        .when('/mantenedorCargo', {
          templateUrl: 'public/views/mantenedorCargo.html'
        })

        .when('/mantenedorEmpleador', {
          templateUrl: 'public/views/manetenedorEmpleador.html'
        })

        .when('/mantenedorFunciones', {
          templateUrl: 'public/views/mantenedorFunciones.html'
        })

        .when('/mantenedorUsuario', {
          templateUrl: 'public/views/MantenedorUsuario.html'
        })
        
        .when('/formularioCargo', {
          templateUrl: 'public/views/formularioCargo.html'
        })

        .when('/formularioDisenador', {
          templateUrl: 'public/views/formularioDisenador.html'
        })

        .when('/formularioEmpleador', {
          templateUrl: 'public/views/formularioEmpleador.html'
        })

        .when('/formularioFuncion', {
          templateUrl: 'public/views/formularioFuncion.html'
        })

        .when('/formularioTarea', {
          templateUrl: 'public/views/formularioTarea.html'
        })
        
        .when('/formularioUsuario', {
            templateUrl: 'public/views/formularioUsuario.html'
          })

        .otherwise({
          redirectTo: '/'
        });
    }]);