// * Not Using Any More... In The Project (Not-Called From Any Component)

import { Box, Button, Card, makeStyles, TextField } from "@mui/material";
import React, { FormEvent, useRef } from "react";

interface Props {
  Title: string;
  Desc: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  SubmitFormModal: (e: React.FormEvent) => void;
}

// * Functional-Type is "React.FC", "Props" Are Defined through interface
const Body: React.FC<Props> = ({
  Title,
  Desc,
  SubmitFormModal,
  setTitle,
  setDesc,
}): JSX.Element => {
  // * Defining event-type On-Change Event

  const onchange = (_e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = _e;

    // * Additional way of doing the exact same thing above
    // // if (name === "desc") setDesc(value);
    // // if (name === "title") setTitle(value);

    name === "desc" ? setDesc(value) : setTitle(value);
    // console.log(value, name)
  };
  return (
    <>
      <Box component={"form"} onSubmit={SubmitFormModal}>
        {/* <input placeholder="Your Task" onChange={onchange} value={TODO} /> */}
        <TextField
          color="secondary"
          fullWidth={true}
          required={true}
          id="outlined-basic"
          name="title"
          onChange={onchange}
          value={Title}
          label="Title"
          variant="outlined"
        />
        <TextField
          color="secondary"
          fullWidth={true}
          required={true}
          value={Desc}
          name="desc"
          onChange={onchange}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline={true}
        />

        <Button type="submit" color="secondary" variant="contained">
          Add
        </Button>
        
      </Box>
    </>
  );
};

export default Body;
