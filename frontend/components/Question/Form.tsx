import { useState } from "react";
import { useCreateQuestion, useUpdateQuestion } from "../../hooks/useQuestion";
import { UpdateQuestion } from "../../types/question";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FormProps } from "../../types/question";
import { useFetchQuestionTypes } from "@/hooks/useTypes";

const Form = (props: FormProps) => {
  const [params, setParams] = useState<UpdateQuestion>({
    content: "",
    answer: "",
    workbook_id: props.workbook_id,
    type_id: props.type_id,
    id: props.id ? props.id : 0,
  });
  const types = useFetchQuestionTypes();

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
      <Box sx={{ mt: 2, mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel sx={{ bgcolor: "white", px: 1 }} required id="type-label">
            問題形式
          </InputLabel>
          <Select
            labelId="type-label"
            name="type_id"
            value={params.type_id}
            onChange={(e) => {
              setParams({ ...params, type_id: Number(e.target.value) });
            }}
          >
            {types &&
              types.data?.map((type: any) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.question_format_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
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
