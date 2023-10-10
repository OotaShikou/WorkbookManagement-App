export interface FetchWorkbook {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}
