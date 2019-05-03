// Private variables
var list = []
function sortList() {
  list.sort(function(a, b) {
    return a - b;
  })
}

module.exports = {
  printList: function() {
    return list;
  },
  numStorage: function(num) {
    list.push(num)
    return list;
  },
  numSort: function() {
    sortList();
  }
};