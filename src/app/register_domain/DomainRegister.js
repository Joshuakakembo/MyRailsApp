import React, { useEffect } from "react";
import { getDomain } from "../../Actions/domainActions";
import SearchIcon from "./Register";
import { useDispatch } from "react-redux";
import Register from "./Register";

export default function DomainRegister() {
  const [term, setTerm] = React.useState("");
  const [domains, setDomains] = React.useState([]);
  const dispatch = useDispatch();
  console.log(term);
  useEffect(() => {
    dispatch(getDomain());
  }, [dispatch]);

  return (
    <div>
      <Register/>
    </div>
  );
}
