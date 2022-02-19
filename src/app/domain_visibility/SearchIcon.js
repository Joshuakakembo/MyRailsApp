import React from "react";
// const search = {
//   search_term: "",
// };
export default function SearchIcon({ searchTerm }) {
  const [text, setText] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-around">
          <div className="mr-4 w-100 m-auto ">
            <input
              type="text"
              className="form-control bg-gray border-0 rounded-lg w-100 "
              placeholder="Check domains"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="ml-4">
            <button
              type="submit"
              className="bg-info py-3 px-2 rounded-lg border-0 ml-4"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
