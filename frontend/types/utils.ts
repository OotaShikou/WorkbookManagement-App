export interface DialogProps {
  tooltip_title: string;
  action?: () => void;
  content: React.ReactNode;
  dialog_title: string;
  button: React.ReactNode;
}
