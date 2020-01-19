import React from 'react';
import { useParams, } from "react-router-dom";

function Company(props) {
  const { company } = useParams();
  return (
    <p>{company}</p>
  );
}

export default Company;
