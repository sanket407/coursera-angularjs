( function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyList();
  toBuy.checkOff = function ($index) {

    ShoppingListCheckOffService.checkOff($index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyList = [{name : "cookies", quantity : "10"},
                   {name : "breads", quantity : "5"},
                   {name : "cheeses", quantity : "20"},
                   {name : "chocolates", quantity : "25"},
                   {name : "candies", quantity : "15"}];

  var alreadyBoughtList = [];

  service.checkOff = function(index){

    var removedItem = toBuyList[index];
    toBuyList.splice(index, 1);
    alreadyBoughtList.push(removedItem);
  };

  service.getAlreadyBoughtList = function(){

     return alreadyBoughtList
  };

  service.getToBuyList = function(){

    return toBuyList;
  };
}
})();
