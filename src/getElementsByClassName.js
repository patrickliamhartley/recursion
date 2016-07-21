// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var elements=[]
		nodeFunc= function (node){			
			var classes=node.classList;
				if(node.length){
					for (var i=0;i<node.length;i++){
						if(node[i].classList){
						nodeFunc(node[i]);
						}
					}
				}

				else{
					if(classes){
						if (classes.contains(className)){
							elements.push(node);
						}
						nodeFunc(node.childNodes);
					}	

				}
		 
			}

 nodeFunc(document.body);
 return elements;
  // your code here
};

