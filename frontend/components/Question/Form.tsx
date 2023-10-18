import React from "react";
import { useCreateQuestion, useUpdateQuestion } from "../../hooks/useQuestion";
import { UpdateQuestion } from "../../types/question";
import { Box, TextField, Button } from "@mui/material";
import { FormProps } from "../../types/question";

const Form = (props: FormProps) => {
  const [params, setParams] = React.useState<UpdateQuestion>({
    content: "",
    answer: "",
    workbook_id: props.workbook_id,
    type_id: props.type_id,
    id: props.id ? props.id : 0,
  });

  return (
    <Box sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        name="content"
        label="問題集"
        type="text"
        id="content"
        defaultValue={params.content}
        onChange={(e) => setParams({ ...params, content: e.target.value })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="answer"
        label="答え"
        type="text"
        id="answer"
        defaultValue={params.answer}
        onChange={(e) => setParams({ ...params, answer: e.target.value })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="type_id"
        label="問題形式"
        type="number"
        id="type_id"
        defaultValue={params.type_id}
        onChange={(e) =>
          setParams({ ...params, type_id: parseInt(e.target.value) })
        }
      />
      <Button
        onClick={() =>
          props.id ? useUpdateQuestion(params) : useCreateQuestion(params)
        }
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
      >
        {props.button_text}
      </Button>
    </Box>
  );
};

export default Form;
