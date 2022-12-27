import { EditLocationOutlined } from "@mui/icons-material";
import { Box, Container, Modal, Typography } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import Body from "./Body";
import FormDialog from "./FormDialog";
import { Todo } from "./Model";
import TodosContainer from "./TodosContainer";

const App: React.FC = (): JSX.Element => {
  let yourName: string = "hey there"; // * variable will only store a 'string' type data
  let yourAge: number = 18; // * Variable will only store an 'number' type data
  let isABigLiar: boolean = false; // * will only store a boolean value

  // * Variable Would Only Used To Store Array-Of-Strings
  let qualities: string[] = [
    "Programmer",
    "Body-Builder",
    "WingChuner",
    "Foot-Baller",
  ];

  // * [Tuple], An Special Type-Variable Will Only Store 3 things; [number, string, boolean]
  let role: [number, string, boolean] = [5, "ueountoae", true]; // * Tuple

  // * This is how we make objects in ts,
  let employee: object; // * This is Only used to store a general-object

  // * Defining The "Object-Properties"
  type Employee = {
    name: string;
    age: number | string; // * It Can Have "string and number" both type
    work?: string[]; // * The Key 'work' is used to store [array-of-strings], But it's [Optional]
    role: [number, string];
  };

  // * employee2 is the Variable, that is only used to store an object...
  // * According To The "Given-Restrictions", Defining In "Employee" With The Help Of 'type' keyword
  let employee2: Employee = {
    name: "Ramu kaka",
    age: 40,
    work: [
      "Product Manager",
      "Product-Designer",
      "Product-Manufacturer-Artist",
    ],
    role: [1, "shankar"],
  };
  employee2 = {
    name: "Shusit",
    age: 18,
    work: ["Big-Data-Anaylist", "Data-Manager"],
    role: [1, "shaddu"],
  };

  // * Array Of The Custome-Object-Type By using 'type' keyword
  let employs: Employee[];

  // * Assigning An [Array-Of-Objects] To The 'employs' Variable According To The Predefined-Types
  employs = [
    {
      name: "ranjeet",
      age: 23,
      work: ["DemoWork1", "Demo-work-2"],
      role: [2, "shoabi"],
    },
    {
      name: "ranjeet",
      age: 23,
      work: ["DemoWork1", "Demo-work-2"],
      role: [2, "shoabi"],
    },
  ];

  /* --------------- Function-Types-In-TS -----------------*/
  // * "write-identifier" is having a function-type
  let write: Function;

  // * "Write-Identifier" is having a custome function-type;
  let Write: (name: string) => never; // * 'never' Returns-Nothing, 'void' Returns-Undefined

  let storeAnyTypeOfData: any; // * Not-Recommended
  let notSureWhatToStore: unknown; // * Recommended
  /* --------------- Function-Types-In-TS -----------------*/

  /*-------------------------------- PROJECT-STARTING -------------------------------------_*/
  /*-------------------------------- PROJECT-STARTING -------------------------------------_*/

  const [Title, setTitle] = useState<string>("");
  const [Desc, setDesc] = useState<string>("");
  const [Open, setOpen] = useState<boolean>(false); // * For Modal-Element
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [UID, setUID] = useState<number | null>(null);

  const addTodo = () => {
    // * Constructing An Object With The Given-Todo
    const todoObj: Todo = {
      // * const uniqueID =()=> Math.floor(Math.random() * Date.now())
      // TODO The Above Way of creating Unique-ID is Better than this, would integerate soon...!
      _id: Date.now(),
      _todoTitle: Title,
      _todoDesc: Desc,
      _done: false,
    };

    // * Appending The {New-Todo} (Object) In The Previous-Todos
    setTodos([...Todos, todoObj]);

    // * Updating The "LC"
    localStorage.setItem("todos", JSON.stringify([...Todos, todoObj]));
  };
  const editTodo = (uId: number ) => { 
    

    Todos.forEach((todo) => {
      if (todo._id === uId) {
        todo._todoTitle = Title;
        todo._todoDesc = Desc;
      }
    });
    console.log("hey there this", Todos)
    // * Appending The {New-Todo} (Object) In The Previous-Todos
    setTodos([...Todos]);

    // * Updating The "LC"
    localStorage.setItem("todos", JSON.stringify([...Todos]));
  };

  // * Event-Type On Submit-Event (form) using as [Edit, Add]
  const SubmitFormModal = (e: React.FormEvent) => {
    // * Preventing Default Action On-Submitting Form (Reloading)
    e.preventDefault();

    // * SubmitFormModal if and only if it has atleast 6 to 7 chars

    if (Title?.length >= 6 && Desc?.length >= 6) {
      if(UID){
        
        editTodo(UID ?? 0);
      }else{

        addTodo();
      }
    }
  };

  // * We Opened THe Modal To "create" or "edit" the Todo?, if edit then we get the 'true' value from the {edit-param}
  const handleClickOpen = (uid: number | null) =>  {
    // * Wether It's opened for "Editing the current todo", or to "add a new todo"

    // * If UId found it means it's edited
    if (uid) {

      // * Updating the state "UID"
      setUID(uid);

      // * Finding and Destructing the title and description properties from the array-of-todos (state-variable)
      const [{_todoTitle, _todoDesc}] = Todos.filter(todo => todo._id === uid)

      // * Updating the Input-States
      setTitle(_todoTitle);
      setDesc(_todoDesc);

    } else {
      // * If Uid not found set the 'null'
      setUID(null);
      setTitle("")
      setDesc("")
    }

    // * Opening Modal
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <FormDialog
          setTodos={setTodos}
          Title={Title}
          Desc={Desc}
          setTitle={setTitle}
          setDesc={setDesc}
          SubmitFormModal={SubmitFormModal}
          Open={Open}
          UID={UID}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />

        {/* //*  COntaining All The Todos Cards  */}
        <TodosContainer
          Todos={Todos}
          Open={Open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          setTodos={setTodos}
        /> 
      </Container>
    </>
  );
};

export default App;
