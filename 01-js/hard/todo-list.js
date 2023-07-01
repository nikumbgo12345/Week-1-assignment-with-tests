/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

    todoArray = [];

    add(todo) {

        this.todoArray.push(todo);
    }

    remove(index) {


        if(index<0 || index >= this.todoArray.length)
            return
        this.todoArray.splice(index,1);
    }

    getAll() {
        return this.todoArray;
    }

    update(index, todo) {

        if(index<0 || index >= this.todoArray.length)
            return
        this.todoArray[index] = todo;
    }

    get(index) {
        if(index<0 || index >= this.todoArray.length)
            return null
        return this.todoArray[index];
    }

    clear() {
        this.todoArray = [];
    }
}


let a = new Todo();

a.add("hello1");
a.add("hello3");
a.add("hello2");
console.log(a.getAll())
a.remove(1);
a.remove(0);
a.remove(2);
console.log(a.getAll())

module.exports = Todo;
