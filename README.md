# Reminders
- Binary tree:

## Tasks
This app provides three options to insert nodes into binary tree.

### Task 1
Insert a new number into the binary tree at the first position available in **Level Order** manner. `Level Order traversal` is also known as `Breadth-First traversal` because it traverses all the nodes at each level before going to the next level (depth).
Specifically, the idea is to do iterative level order traversal of the given tree. If we find a node whose left child is empty, we make new key as left child of the node. Otherwise, if we find a node whose right child is empty, we make new key as right child. We keep traversing the tree until we find a node whose either left or right is empty.

### Task 2
Insert a new number into the binary search tree. There is no need to keep duplicate numbers in the binary search tree. So, you should avoid inserting a new number if it has already inserted.

### Task 3
There is a cross button next to every node, but it is not implemented yet. The node should be removed from tree when this cross button is clicked. Please be careful with deletion in `binary search tree`.

### Task 4
The current implementation is quite bad. It causes too many unnecessary re-renders. Try your best to reduce as much as posible unnecessary re-renders. Please using hooks, context, etc. instead of looking for any libraries.

### Task 5
When you first start app, App component is always render at least twice. Please fix it!
