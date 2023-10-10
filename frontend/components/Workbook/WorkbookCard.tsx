import React from "react";
import { useFetchWorkbook } from "@/hooks/useWorkbook";
import { Box } from "@mui/material";

const WorkbookCard = () => {
  const workBooks = useFetchWorkbook();
  console.log(workBooks);

  return (
    <Box>
      {workBooks &&
        workBooks.data?.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
    </Box>
  );
};

export default WorkbookCard;
