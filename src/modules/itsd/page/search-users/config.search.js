import { ATTR_TYPE } from "shared/utils";
import { PAGE_INDEX_DEFAULT, PAGE_SIZE_DEFAULT } from "shared/constants";

export const searchConfig = [
  {
    type: ATTR_TYPE.STRING,
    label: "Tài khoản",
    name: "username",
    required: false,
    size: 4,
  },
  {
    type: ATTR_TYPE.STRING,
    label: "Quyền",
    name: "role",
    required: false,
    size: 4,
  },
  {
    type: ATTR_TYPE.BUTTON,
    size: 4,
    style: { paddingTop: 35 },
    child: [
      {
        type: ATTR_TYPE.BUTTON_REFRESH,
        label: "Refresh",
        style: {
          border: "1px solid green",
          color: "green",
          background: "transparent",
        },
      },
      {
        type: ATTR_TYPE.BUTTON_SUBMIT,
        label: "Tìm kiếm",
      },
      {
        type: ATTR_TYPE.BUTTON_EXPORT,
        label: "Báo cáo",
      },
    ],
  },
];

export const initialValues = {
  username: "",
  role: "",
  pageIndex: PAGE_INDEX_DEFAULT,
  pageSize: PAGE_SIZE_DEFAULT,
};

export const tableConfig = [
  {
    label: "name",
    key: "name",
    type: ATTR_TYPE.STRING,
  },
  {
    label: "email",
    key: "email",
    type: ATTR_TYPE.STRING,
  },
  {
    label: "body",
    key: "body",
    type: ATTR_TYPE.STRING,
  },
];
