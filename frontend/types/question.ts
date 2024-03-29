import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface FetchQuestion {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}

export interface FetchShowQuestion {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}

export interface CreateQuestion {
  content: string;
  answer: string;
  workbook_id: number;
  type_id: number;
}

export interface UpdateQuestion {
  content: string;
  answer: string;
  id: number;
  workbook_id: number;
  type_id: number;
}

export interface Column {
  id: "content" | "answer";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface FormProps {
  id?: number;
  workbook_id: number;
  type_id: number;
  button_text: string;
}
