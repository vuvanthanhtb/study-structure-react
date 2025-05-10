import { object, string } from "yup";

export const validationSchema = object().shape({
  username: string().required("Vui lòng nhập tài khoản"),
  password: string().required("Vui lòng nhập mật khẩu"),
});
