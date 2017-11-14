// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var results = [];
  node = node || document.body;

  if (node.classList.contains(className)) {
  	results.push(node);
  }

  var children = node.childNodes;

  if (children) {
  	for (var i = 0; i < children.length; i++) {
  		var child = children[i];
  		results = results.concat(getElementsByClassName(className, child);
  	}
  }
  return results
};
