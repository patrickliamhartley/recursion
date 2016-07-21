// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var elements=[];
		nodeFunc= function (node){
			if( !(node===undefined)){
				var classes=node.classes;
				for (var i=0;i<node.length;i++){
					nodeFunc(node[i]);
				}


			}
		}


  // your code here
};
