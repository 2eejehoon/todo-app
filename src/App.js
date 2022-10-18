import React, { Suspense } from "react";
import { Main } from "./pages/Main";
import "./App.css";
import useFetch from "./util/useFetch";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/todos/");

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main todos={todos} isPending={isPending}></Main>}
          ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
