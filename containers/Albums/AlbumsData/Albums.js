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
import { setAlbums } from "../../../redux/actions";
import AlbumsWrapper from "./AlbumsWrapper";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.albums);

  return (
    <AlbumsWrapper>
      <button className="btn btn-primary">class</button>
      <h1 className="mb-4">Album</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>userId</TableCell>
            <TableCell>id</TableCell>
            <TableCell>title</TableCell>
            <TableCell>email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((v) => (
            <TableRow>
              <TableCell>{v.userId}</TableCell>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.title}</TableCell>
              <TableCell>{v.email}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AlbumsWrapper>
  );
};

export default Albums;
