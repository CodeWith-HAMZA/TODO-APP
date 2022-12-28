import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Todo } from "./Model";
import { LocalGroceryStoreSharp } from "@mui/icons-material";

// * Calling From [TodosContainer.tsx]

interface Props {
  item: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleClickOpen: (uid: number) => void;
  handleClose: () => void;
}
export const TodoItem: React.FC<Props> = ({
  item,
  setTodos,
  handleClickOpen,
  handleClose,
}): JSX.Element => {
  let hamza: string = "hamza shauhe";
  let h = hamza as string; // * Compiler will assume it as string variable

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "45%", md: "31%", lg: "31%" },
        boxShadow: 3,
        m: 1,
        p: 1,
        borderRadius: 3,
        // bgcolor: { xs: "blue", sm: "red", md: "yellow", lg: "green" },
      }}
    >
      <CardContent>
        <Typography
          sx={{ wordWrap: "anywhere" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item._todoTitle}
        </Typography>
        <Typography
          sx={{ wordWrap: "anywhere" }}
          variant="body2"
          color="text.secondary"
        >
          {item._todoDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            // * Getting todos from LC
            const todos: Todo[] = JSON.parse(
              localStorage.getItem("todos") ?? ""
            ); 

            // * FINDING THE TARGET-TODO AND THE REMOVING IT FROM ARRAY WITH ".splice" method
            todos.forEach((todo, index) => {
              if (todo._id === item._id) {
                console.log(todo);
                todos.splice(index, 1);
              }
            });

            // * After removing, we are updating in LC
            localStorage.setItem("todos", JSON.stringify([...todos]));

            // * After removing, we are updating the todos state
            setTodos([...todos]);
          }}
          size="small"
          variant="contained"
          color="secondary"
        >
          Done
        </Button>
        <Button
          onClick={() => {
            const Todos: Todo[] = JSON.parse(
              localStorage.getItem("todos") ?? ""
            );

            // * Destructring an Object From Array-Of-Objects  and then, again destructing "_id" a Property From The {Destructured-Object}
            const [{ _id }] = Todos.filter((todo) => todo._id === item._id);

            // * Passing the uid as parameters In the handleClickOpen (modal-Open-State-manage-function)
            handleClickOpen(  _id as number  );
          }}
          size="small"
          variant="contained"
          color="secondary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
