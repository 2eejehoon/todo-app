import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "./actions/todoAction";
import React, { Suspense, useEffect } from "react";
import TodoList from "./pages/TodoList";
import "./App.css";
import useFetch from "./util/useFetch";
import Loading from "./components/Loading";
import TodoDetail from "./pages/TodoDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/todos/");

  const state = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo("http://localhost:3001/todos/"));
  }, [dispatch]);

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            exact
            path="/"
            element={<TodoList todos={todos} isPending={isPending} />}
          />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
