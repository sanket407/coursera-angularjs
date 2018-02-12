( function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyList();

  toBuyList.clicked = function()
  {
    console.log(ShoppingListCheckOffService.getToBuyList());
    toBuyList.items = ShoppingListCheckOffService.getToBuyList;
    console.log(toBuyList.items);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList;
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyList = "x";

  var alreadyBoughtList = [];

  // service.addToAlreadyBoughtList = function(itemName, itemQuantity){
  //   var item = {
  //     name : itemName,
  //     quantity : itemQuantity
  //   }
  //   service.alreadyBoughtList.push(item);
  // };

  // service.getAlreadyBoughtList = function(){
  //
  //   return service.alreadyBoughtList;
  // };

  service.getToBuyList = function(){

    return toBuyList;
  };
}
})();
