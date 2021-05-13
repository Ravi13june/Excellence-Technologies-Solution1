// Given object is not in good format for JavaScript operations
// I am assuming object is in good format

function sortObj(obj) {
  var ordered = {};
  Object.keys(obj)
    .sort()
    .forEach(function (id) {
      ordered[id] = obj[id];
    });
  return ordered;
}

var sortedObj = sortObj(obj);
console.log(sortObj);
