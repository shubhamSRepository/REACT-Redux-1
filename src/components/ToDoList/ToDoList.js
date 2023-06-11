import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleToDo } from "../../Redux/actions/todoActions";

function ToDoList({ onToggle }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);


  /**we are not using below method because it needs to import 'store' which we do not want to 
   * do. Importing store again and again for different files is not a good practice.
   */
  // const todos = store.getState().todos;

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => { dispatch(toggleToDo(index)) }}
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
