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
import { setTodos } from "../../../redux/actions";
import TodosWrapper from "./TodosWrapper";
import { Slide } from "react-awesome-reveal";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTodos(dispatch);
  }, []);

  const data = useSelector((state) => state.todos);

  return (
    <TodosWrapper>
      <h1 className="mb-4">Todo</h1>
      <Slide>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>userId</TableCell>
              <TableCell>title</TableCell>
              <TableCell>completed</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((v) => (
              <TableRow>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.userId}</TableCell>
                <TableCell>{v.title}</TableCell>
                <TableCell>
                  {(v.completed && <FontAwesomeIcon icon={faCheckCircle} />) ||
                    ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Slide>
    </TodosWrapper>
  );
};

export default Todos;
