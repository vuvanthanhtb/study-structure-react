import { ATTR_TYPE } from "shared/utils";

export const config = [
  {
    type: ATTR_TYPE.STRING,
    label: "Tài khoản",
    name: "username",
    required: true,
    size: 12,
  },
  {
    type: ATTR_TYPE.PASSWORD,
    label: "Mật khẩu",
    name: "password",
    required: true,
    size: 12,
  },
  {
    type: ATTR_TYPE.BUTTON_SUBMIT,
    child: [
      {
        type: "submit",
        label: "Đăng nhập",
      },
    ],
  },
];

export const initialValues = {
  username: "",
  password: "",
};
