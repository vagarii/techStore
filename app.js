/**
 * Created by XINLAI on 1/24/17.
 */
(function(){
    var app = angular.module('techStore', ['store-directives']);



/*    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function (newGallery) {
            this.current = newGallery || 0;
        };
    }); */

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
        $http.get('./store-products.json').success(function (data) {
            store.products = data;
        });
    }]);



/*   app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });*/

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();