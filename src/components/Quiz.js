import { CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import useStateContext from "../hooks/useStateContext";

export default function Quiz() {
  const [qns, setQns] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then((res) => {
        setQns(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return qns.length != 0 ? (
    <card>
      <CardContent>
        <Typography variant="h6">{qns[qnIndex].qnInWords}</Typography>
      </CardContent>
    </card>
  ) : null;
}
