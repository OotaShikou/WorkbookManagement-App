import React from "react";
import {
  useFetchQuestion,
  useCreateQuestion,
  useDeleteQuestion,
  useUpdateQuestion,
} from "../../hooks/useQuestion";
import { UpdateQuestion } from "../../types/question";
import { Box, TextField, Button } from "@mui/material";
import { FormProps } from "../../types/question";

const Form = (props: FormProps) => {
  const [params, setParams] = React.useState<UpdateQuestion>({
    content: "",
    answer: "",
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
