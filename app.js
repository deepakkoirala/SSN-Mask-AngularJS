var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.modelssn = '';
});


app.directive("ssnInput",function(){
    return {
        require:'ngModel',
        link: function(scop, elem, attr, ngModel){
            $(elem).mask("999-99-9999");
            var temp;
            var regxa = /^(\d{3}-?\d{2}-?\d{4})$/;
            $(elem).focusin(function(){
                $(elem).val(temp);
            });
            $(elem).on('blur',function(){
                if(regxa.test($(elem).val())){
                   temp = $(elem).val();
                   $(elem).val("XXX-XX" + temp.slice(6));
               }
            });
        }
    }
});