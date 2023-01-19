class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertfirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLastNode(data) {
    let node = new Node(data);
    let current;

    // if empty ? make head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //Insert at index
  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertfirstNode(100);
ll.insertfirstNode(200);
ll.insertfirstNode(300);

ll.insertLastNode(400);

ll.printListData();
