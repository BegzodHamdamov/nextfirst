import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../redux/actions";
import PostsWrapper from "./PostsWrapper";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPosts(dispatch);
  }, []);

  const data = useSelector((state) => state.posts);

  return (
    <PostsWrapper>
      <h1 className="mb-4">Posts</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>userId</TableCell>
            <TableCell>id</TableCell>
            <TableCell>title</TableCell>
            <TableCell>body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((v) => (
            <TableRow>
              <TableCell>{v.userId}</TableCell>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.title}</TableCell>
              <TableCell>{v.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PostsWrapper>
  );
};

export default Posts;
