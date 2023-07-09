import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useFetchQuestion,
  useCreateQuestion,
  useDeleteQuestion,
} from "../../hooks/useQuestion";
import { Column } from "../../types/question";
import TableDialog from "../utils/TableDialog";
import Form from "./Form";

const columns: readonly Column[] = [
  { id: "content", label: "問題", minWidth: 170 },
  { id: "answer", label: "答え", minWidth: 100 },
];

const QuestionTable = () => {
  const { data, error, mutate } = useFetchQuestion();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ width: 120 }} align={"center"}>
                操作
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell align={"center"} style={{ width: 120 }}>
                        <TableDialog
                          tooltip_title={"問題を編集する"}
                          content={
                            <Form id={row.id} button_text={"編集する"} />
                          }
                          dialog_title={"問題を編集しますか?"}
                          button={
                            <IconButton size="small" color={"secondary"}>
                              <EditIcon />
                            </IconButton>
                          }
                        />
                        <TableDialog
                          tooltip_title={"問題を削除する"}
                          action={() => useDeleteQuestion(row.id)}
                          content={`本当に問題を削除しますか?\n よろしければ「はい」を押してください。`}
                          dialog_title={"問題を削除しますか?"}
                          button={
                            <IconButton size="small" color={"warning"}>
                              <DeleteIcon />
                            </IconButton>
                          }
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data ? data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ float: "left" }}
        />
        <TableDialog
          tooltip_title={"問題を作成する"}
          content={<Form button_text={"作成する"} />}
          dialog_title={"問題を作成しますか?"}
          button={
            <Button
              size="small"
              color="success"
              variant="contained"
              endIcon={<AddCircleOutlineIcon />}
              sx={{ mr: 3 }}
            >
              問題を作成する
            </Button>
          }
        />{" "}
      </Box>
    </Paper>
  );
};

export default QuestionTable;
