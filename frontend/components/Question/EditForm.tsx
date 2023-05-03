import React from "react";
import {
  useFetchQuestion,
  useCreateQuestion,
  useDeleteQuestion,
  useUpdateQuestion,
} from "../../hooks/useQuestion";
import { UpdateQuestion } from "../../types/question";
import { Box, TextField, Button } from "@mui/material";
import { EditFormProps } from "../../types/question";

const EditForm = (props: EditFormProps) => {
  const [params, setParams] = React.useState<UpdateQuestion>({
    content: "",
    answer: "",
    id: props.id,
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
        onClick={() => useUpdateQuestion(params)}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
      >
        {props.button_text}
      </Button>
    </Box>
  );
};

export default EditForm;
