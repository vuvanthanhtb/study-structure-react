import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ATTR_TYPE } from "shared/utils";
import { ButtonComponent } from "shared/components";
import styles from "./_table.module.scss";

const Table = (props) => {
  const { stateName, nameSelect, tableConfig = [], onPageChange } = props;
  const { data, pageCount, total, pageIndex, pageSize } =
    useSelector((state) => state[stateName][nameSelect]) || [];

  return (
    <div className={styles["table-container"]}>
      <div className={styles["btn-group"]}>
        <ButtonComponent title="Thêm mới" />
        <ButtonComponent
          className={styles["btn-export"]}
          title="Xuất dữ liệu"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            {tableConfig.map((item, index) => (
              <th key={1111 + index}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(data) ? data : []).map((item, index) => (
            <tr key={2222 + index}>
              {tableConfig.map((el, idx) => {
                if (el.type === ATTR_TYPE.NUMBER) {
                  return (
                    <th key={3333 + idx} className={styles["cell-number"]}>
                      {item[el.key]}
                    </th>
                  );
                }
                return (
                  <th key={3333 + idx} className={styles["cell-string"]}>
                    {item[el.key]}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles["table-footer"]}>
        <div className={styles["table-footer__result"]}>
          {pageIndex}-{pageSize * pageIndex}/ {total} kết quả
        </div>
        <div className={styles["table-footer__paging"]}>
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              shape="rounded"
              onChange={(event, page) => {
                event.preventDefault();
                return onPageChange(page);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Table;
