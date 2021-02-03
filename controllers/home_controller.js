
const arr = [1,2,3,4,5];


module.exports.home = function(req , res){

    return res.render( "home" , {
        title:"TO DO APP",
        heading : "TO DO APP",
        nums : arr
    });

};