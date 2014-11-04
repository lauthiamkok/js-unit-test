app.factory("SimpleService", function(){
    var service = {
        prop:'Hello World',
        getData: function(){
            return [{
                id: 1,
                name: "Mark"
            }];
        }

    };

    return service;
});