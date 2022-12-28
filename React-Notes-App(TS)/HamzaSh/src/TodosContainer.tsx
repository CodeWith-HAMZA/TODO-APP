import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { Todo } from "./Model";
import { TodoItem } from "./TodoItem";
// * Calling From [App.tsx]
interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  Open: boolean;
  handleClickOpen: (uid: number) => void;
  handleClose: () => void;
}
const TodosContainer: React.FC<Props> = ({
  Todos,
  Open,
  setTodos,
  handleClickOpen,
  handleClose,
}): JSX.Element => {
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      console.log("todos are here");
      setTodos(JSON.parse(localStorage.getItem("todos") ?? ""));
    } else {
      setTodos([]);
    }
  }, []);

  return (
    <>
      <Typography variant={"body1"} component={"h2"} fontSize={"2rem"}>
        Your Todos
      </Typography>
      <Stack flexDirection={"row"}  flexWrap={"wrap"}>
        {Todos.length > 0 &&
          Todos.map((item, ind) => (
            <TodoItem
              setTodos={setTodos}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              key={ind}
              item={item}
            />
          )) || <Typography variant="h3" mt={6} width={"100%"}  textAlign={'center'}>No Todos</Typography>}
      </Stack>
    </>
  );
};

export default TodosContainer;
