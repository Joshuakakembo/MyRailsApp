import React, { useEffect } from "react";
import { detailDomain, getDomain } from "../../Actions/domainActions";
import SearchIcon from "./SearchIcon";
import { useDispatch } from "react-redux";

export default function DomainPage() {
  const [term, setTerm] = React.useState("");
  const [domains, setDomains] = React.useState([]);
  const dispatch = useDispatch();
  console.log(term);
  useEffect(() => {
    dispatch(detailDomain(term));
  }, [dispatch]);

  return (
    <div>
      <SearchIcon searchTerm={(text) => setTerm(text)} />
      <div>
        <ul>
          {domains.map((domain) => (
            <li key={domain.key}>{domain}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
