import React from "react";
import {
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";
import { DialogProps } from "../../types/utils";

const TableDialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={props.tooltip_title}>
        <Box onClick={handleClickOpen} sx={{ display: "inline" }}>
          {props.button}
        </Box>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.dialog_title}</DialogTitle>
        <DialogContent sx={{ width: "500px" }}>{props.content}</DialogContent>
        {props.action && (
          <DialogActions>
            <Button onClick={handleClose}>いいえ</Button>
            <Button onClick={props.action} autoFocus>
              はい
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default TableDialog;
