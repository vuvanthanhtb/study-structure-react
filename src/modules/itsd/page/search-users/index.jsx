import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../../slice.itsd";
import Table from "shared/table";
import FormSearch from "shared/form/form-search";
import { searchConfig, tableConfig, initialValues } from "./config.search";

const SearchUsersPage = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useState(initialValues);
  useEffect(() => {
    dispatch(searchUsers({}));
  }, []);

  const onSearch = (values) => {
    dispatch(searchUsers(values));
  };

  const handleRefresh = () => {
    setParams(initialValues);
  };

  const handleExport = () => {
    console.log("export");
  };

  const onPageChange = (page) => {
    console.log(page);
  };

  return (
    <div>
      <FormSearch
        config={searchConfig}
        initialValues={params}
        onSubmit={onSearch}
        handleRefresh={handleRefresh}
        handleExport={handleExport}
      />
      <Table
        stateName="itsd"
        nameSelect="list"
        tableConfig={tableConfig}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default SearchUsersPage;
