export const config = [
  {
    type: "text",
    label: "Tài khoản",
    name: "username",
    required: true,
    size: 12,
  },
  {
    type: "password",
    label: "Mật khẩu",
    name: "password",
    required: true,
    size: 12,
  },
  {
    type: "button",
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
