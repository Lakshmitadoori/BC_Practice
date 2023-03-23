// 

import * as React from "react";
import axios from "axios";
import { theme } from "../../../theme";
import Pagination from "@mui/material/Pagination";
import { SelectChangeEvent } from "@mui/material/Select";
import MuiChip from "../../atoms/Chip";
import Selection from "../../../components/atoms/Select";
import { Button, PaginationItem } from "@mui/material";
// import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {ThemeProvider} from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableFooter,
} from "@mui/material";
const labels = ["NAME", "ADJUDICATION", "STATUS", "LOCATION", "DATE"];
interface IProfile {
  id: number;
  name: string;
  status: string;
  location: string;
  email: string;
  dob: string;
  phoneNo: string;
  zipcode: string;
  driverLicense: string;
  adjudication: string;
}
interface IProps {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  right?: number;
  searchTerm:string;
  posts:    IProfile[],
}
const CandidateList = (props: IProps) => {
  const { width = 1056, height, top = 0, left = 0, right = 0, searchTerm  } = props;
  let initial: IProfile[] = [];
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const date = new Date();
  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);
  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  if (!props.posts) return null;
  else
    return (
      <>
      <ThemeProvider theme={theme}>
        <Table
          size="small"
          sx={{
            fontFamily: theme.typography.fontFamily,
            width: `${width}px`,
            height: `${height}px`,
            marginTop: `${top}px`,
            marginLeft: `${left}px`,
            marginRight: `${right}px`,
          }}
        >
          <TableHead
            sx={{
              background: theme.palette.primary.primary100,
              borderBottom: `1px solid ${theme.palette.structural.stroke}`,
              height: "42px",
            }}
          >
            {labels.map((label, index) => (
              <TableCell key={index}>
                <Typography variant="caption" sx={{ color: theme.palette.textColor.mediumEmphasis }}>
                  {label}
                </Typography>
              </TableCell>
            ))}

            <TableCell sx={{ width: "166px", height: "26px" }} />
          </TableHead>

          <TableBody>
            {currentPosts.map((post: IProfile, index) => {
              return (
                <TableRow key={index} sx={{ height: "48px" }}>
                  <TableCell sx={{ color: "blue" }}>
                    <Typography variant="body2">{post.name}</Typography>
                  </TableCell>
                  <TableCell>
                    {post.adjudication == "" ? (
                      "-"
                    ) : post.adjudication == "Engage" ? (
                      <MuiChip
                        background={theme.palette.accent.lightGreen}
                        color={theme.palette.accent.green}
                        label="ENGAGE" />
                    ) : (
                      <MuiChip
                        background={theme.palette.accent.lightYellow}
                        color={theme.palette.accent.yellow}
                        label="ADVERSE ACTION" />
                    )}
                  </TableCell>
                  <TableCell>
                    {post.status == "clear" ? (
                      <MuiChip
                        background={theme.palette.accent.lightGreen}
                        color={theme.palette.accent.green}
                        variant="filled"
                        label="CLEAR" />
                    ) : (
                      <MuiChip
                        background={theme.palette.accent.lightYellow}
                        color={theme.palette.accent.yellow}
                        label="CONSIDER" />
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{post.location}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {date.getDate() +
                        "/" +
                        date.getMonth() +
                        "/" +
                        date.getFullYear()}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: "166px", height: "26px" }} />

                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <Typography variant="caption" sx={{ marginRight: "20px" }}>
                  {rowsPerPage} out of {props.posts.length} results
                </Typography>
                    <Selection
                  options={[
                    { value: "10", label: "10 per page" },
                    { value: "20", label: "20 per page" },
                    { value: "5", label: "5 per page" },
                  ]}
                  handleChange={handleChange}
                  width={113}
                  height={26} />
              </TableCell>
              <TableCell colSpan={1} sx={{ paddingLeft: 0, marginLeft: 0 }}>
                <Pagination
                  shape="rounded"
                  size="small"
                  count={Math.ceil(props.posts.length / rowsPerPage)}
                  page={currentPage}
                  renderItem={(item) => {
                    console.log(item);
                    if (item.type != "end-ellipsis")
                      if (item.type != "start-ellipsis")
                        return <PaginationItem slots={{}} {...item} />;
                  } }
                  siblingCount={1}
                  boundaryCount={0}
                  onChange={handleChangePage} />
              </TableCell>
            
            </TableRow>
          </TableFooter>
        </Table>
      </ThemeProvider></>
    );
};
export default CandidateList;

