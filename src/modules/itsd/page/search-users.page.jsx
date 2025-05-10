import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../slice.itsd";
import Table from "shared/table";
import { tableSearchConfig } from "../config.itsd";

const SearchUsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUsers({}));
  }, []);

  return (
    <div>
      <h1>Search Users</h1>
      <Table
        stateName="itsd"
        nameSelect="list"
        tableConfig={tableSearchConfig}
        pageCount={20}
      />
    </div>
  );
};

export default SearchUsersPage;
