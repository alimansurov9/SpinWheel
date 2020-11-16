import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { fetchData } from './redux/actions';
import TodoItem from './Todoitem'

function TodoList() {
  const state = useSelector((state)=>{
    return state.todo;
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const search = new URLSearchParams(location.search);

  useEffect(()=>{
    dispatch(fetchData())
  },[location, dispatch])

  if(!state?.todos?.length){
    return <h6 style={{color: "white"}}>Оставьте здесь свой комментарий</h6>
  }
  return (
    <div>
      {!(search.get("q") == null || !search.get("q").trim().length) && (
        <p>Results for search: {search.get("q")}</p>
      )}
      <ul className="todo-list">
        {state.todos.map(item=>(
          <TodoItem 
            key={item.id + "-list-item"} 
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
