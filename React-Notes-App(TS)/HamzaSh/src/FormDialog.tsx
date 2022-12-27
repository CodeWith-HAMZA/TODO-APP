import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Add from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/system";
import { Paper } from "@mui/material";
import DialogBody from "./DialogBody";
import { Todo } from "./Model";
interface Props {
  Title: string;
  Desc: string;
  Open: boolean;
  UID: number | null;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  SubmitFormModal: (e: React.FormEvent) => void;
  handleClickOpen: (uid: number | null) => void;
  handleClose: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const FormDialog: React.FC<Props> = ({
  Title,
  Desc,
  Open,
  UID,
  setTitle,
  setDesc,
  SubmitFormModal,
  handleClickOpen,
  handleClose,
}: Props): JSX.Element => {
  const onchange = (e: React.FormEvent<HTMLInputElement>) => {
    // * Destructuring the currentTarget Property
    const {
      currentTarget: { name, value },
    } = e;

    // * Tracking the input-states
    name === "desc" ? setDesc(value) : setTitle(value);
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "0.8rem", mt: 4 }}
        onClick={() => handleClickOpen(null)}
      >
        <Add sx={{ fontSize: "4rem" }} />
      </Button>

      {/* * Modal-Screen(PoppUp-Content)  */}
      <DialogBody
        onchange={onchange}
        handleClickOpen={() => handleClickOpen(null)}
        handleClose={() => handleClose ()}
        Title={Title}
        Desc={Desc}
        Open={Open}
        SubmitFormModal={SubmitFormModal}
        UID={UID}
      />
    </Stack>
  );
};

export default FormDialog;
