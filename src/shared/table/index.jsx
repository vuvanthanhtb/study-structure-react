import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { ATTR_TYPE } from "shared/utils";
import { ButtonComponent } from "shared/components";
import styles from "./_table.module.scss";

const Table = (props) => {
  const {
    stateName,
    nameSelect,
    tableConfig = [],
    handlePageClick,
    pageCount,
  } = props;
  const data = useSelector((state) => state[stateName][nameSelect]) || [];

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
        <div className={styles["table-footer__result"]}>1-25/ 500 kết quả</div>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName=""
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
