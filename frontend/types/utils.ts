export interface DialogProps {
  tooltip_title: string;
  color?:
    | "secondary"
    | "inherit"
    | "default"
    | "primary"
    | "error"
    | "info"
    | "success"
    | "warning";
  action?: () => void;
  content: React.ReactNode;
  dialog_title: string;
  icon: React.ReactNode;
}
