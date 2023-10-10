export interface FetchQuestionType {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}
