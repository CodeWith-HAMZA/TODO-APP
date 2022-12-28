import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// * Props-Types 
interface Props {
  onchange: (e: React.FormEvent<HTMLInputElement>) => void;
  Title: string;
  Desc: string;
  Open: boolean;
  UID: number | null;
  handleClickOpen: () => void;
  handleClose: () => void;
  SubmitFormModal: (e: React.FormEvent) => void;
}



// * Called-By-FormDialog.tsx
const DialogBody: React.FC<Props> = ({
  onchange,
  handleClickOpen,
  handleClose,
  SubmitFormModal,
  Title,
  Desc,
  Open,
  UID
}): JSX.Element => {
   
  return (
    <Dialog open={Open} onClose={handleClose}>
      {" "}
      {/* 'onClose' the event fires if [We-Click-Outside-Of-The-Targetted-Container] */}
      <DialogTitle>{UID ? "Edit" : "Add"} Your Todo</DialogTitle>
      <Box component={"form"} onSubmit={SubmitFormModal}>
        <DialogContent>
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
            sx={{ mb: "0.6rem" }}
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
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            type="submit"
            color="secondary"
            variant="contained"
          >
            {UID ? "Edit" : "Add"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DialogBody;
