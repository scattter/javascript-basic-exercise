export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if(array == null || array == undefined){
    throw new Error('Creating list from undefined array');
  }else if(array.length == 0){
    throw new Error('Creating list from empty array');
  }else if (array.length >= 1){
    function LinkedList(){
      var Node = function (value) {　　　　　　 //新元素构造
        this.value = value;
        this.next = null;
      };
      var length = 0;
      var head = null;
  
      this.append = function (value) {
          var node = new Node(value);　　　　   //构造新的元素节点
          var current;
          if (head === null) {　　　　　　　　//头节点为空时  当前结点作为头节点
              head = node;
          } else {
              current = head;　　　　　　　　　　　　　　
              while (current.next) {　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
                  current = current.next;
              }
              current.next = node;　　　　　　//将尾节点指向新的元素，新元素作为尾节点
          }           
        length++;　　　　　　　　　　　　　　//更新链表长度
      };
      this.getHead = function () {
        return head;
      }
    }
    var li = new LinkedList();
    for(var i = 0; i < array.length; i++){
      li.append(array[i]);
    }
    return li.getHead();
  }
}
