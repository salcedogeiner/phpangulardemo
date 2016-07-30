(function() {
  "use strict";

  var app = angular.module("docsApp", ["ngTable"]);

  app.controller("docsController", docsController);
 
  function docsController($http,NgTableParams) {
    var self = this;
    var simpleList=[];
    $http.get('/phpweb1/data/documentosList.php').success(function (data) {
        self.tableParams = new NgTableParams({
        count: 5,
        sorting: { id_documento: "asc" }}, {
      counts: [5, 10, 20,40],
      dataset: data
    });                  
            });
    self.libro ={};  
    self.agregar= function(libro,$http){
        $http.post('/phpweb1/data/agregarDocumento.php', {'id_documento': libro.id_documento, 'titulo': libro.titulo, 
            'descripcion': libro.descripcion, 'url': libro.url}
                    ).success(function() {
                        this.libro={};
                    });                    
      //simpleList.push(libro);      
    };
    
  }
})();

//var datos=[{"id_documento":1,"titulo":"SQL sentencias basicas","descripcion":"sentencias select, insert, update, delete ","url":"documentos\/trysql-slides.pdf"},{"id_documento":2,"titulo":"SQL intermedio","descripcion":"sentencias de creacion, filtros y ordenamiento","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":3,"titulo":"titulo prueba 1","descripcion":"descripcion prueba del sistema","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":4,"titulo":"titulo prueba 2","descripcion":"descripcion prueba de la base de datos","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":5,"titulo":"titulo prueba 3","descripcion":"descripcion prueba del bpmn","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":6,"titulo":"titulo prueba 4","descripcion":"descripcion prueba del sistema 2","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":7,"titulo":"titulo prueba 1","descripcion":"descripcion scsa","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":8,"titulo":"titulo prueba 1s","descripcion":"descripcion nanannana","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":9,"titulo":"titulo prueba 1saf","descripcion":"hola mundo?","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":10,"titulo":"titulo prueba 1as","descripcion":"observaci\u00f3n de t\u00edldes ","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"},{"id_documento":11,"titulo":"title","descripcion":"oihoihio","url":"documentos\/CodeSchool-TheSequelToSQL-1-2.pdf"}];







/*(function () {
    var app = angular.module('testApp', ["smart-table"]);
    app.controller('DocsController', ['$http', '$scope', function ($http, $scope) {
            var biblioteca = this;
            biblioteca.documentos = [];
            biblioteca.docu = {};
            $scope.itemsByPage = 5;
            $scope.rowCollection = [];
            $http.get('/phpweb1/data/documentosList.php').success(function (data) {
                biblioteca.documentos = data;
                $scope.rowCollection = data;
            });


        }]);
})();



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


