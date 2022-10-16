import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTesk";
import Task from "./component/Task";

function App() {
  const [show, setShow] = useState(false)
  const [tasks, setTasks] = useState([]);

  //delete by id
  const onDelete = (id) => {
    // console.log('delete ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle remainder
  const toggleReminder = (id) => {
    // console.log("reminder", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //add task
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const changeShow = () => {
    setShow(!show)
  }

  return (
    <div className="container">
      <Header onAdd={changeShow} showStatus={show}/>
      {show && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No Task To Do"
      )}
    </div>
  ); //need ; or it wrong:expected string or class but recieve object
}

export default App;
