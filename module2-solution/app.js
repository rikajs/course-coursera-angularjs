(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.initializeToBuyItems();

  toBuy.bought = function(index) {
    return ShoppingListCheckOffService.itemsBought(index);
  };
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [];
    var boughtItems = [];

    service.initializeToBuyItems = function() {

        var cookies = {name: "Cookies", quantity: "5"};
        var chocolates = {name: "Chocolates", quantity: "10"};
        var iceCream = {name: "Ice Creams", quantity: "15"};
        var biscuits = {name: "Biscuits", quantity: "20"};
        var samosas = {name: "Samosas", quantity: "25"};

        toBuyItems.push(cookies);
        toBuyItems.push(chocolates);
        toBuyItems.push(iceCream);
        toBuyItems.push(biscuits);
        toBuyItems.push(samosas);

        return toBuyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.itemsBought = function(index) {
        var item = toBuyItems[index];
        toBuyItems.splice(index,1);
        boughtItems.push(item);
    };

};


}) ();
