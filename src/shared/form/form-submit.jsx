import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonComponent from "../components/button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ATTR_TYPE } from "shared/utils";
import styles from "./_form-submit.module.scss";

const FormSubmit = (props) => {
  const { initialValues, validationSchema, onSubmit, config } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid container spacing={2}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              {config.map((item, index) => {
                if (
                  [ATTR_TYPE.STRING, ATTR_TYPE.PASSWORD].includes(item.type)
                ) {
                  return (
                    <Form.Group
                      as={Col}
                      md={item.size}
                      xs={12}
                      key={`form-submit-${9999 + index}`}
                      controlId="validationFormik03"
                    >
                      <Form.Label>{item.label}</Form.Label>
                      {item.type === ATTR_TYPE.STRING && (
                        <Form.Control
                          type={item.type}
                          placeholder={item?.placeholder}
                          name={item.name}
                          value={values[item.name]}
                          onChange={handleChange}
                          isInvalid={!!errors[item.name]}
                          className={styles["input-form"]}
                        />
                      )}
                      {item.type === ATTR_TYPE.PASSWORD && (
                        <InputGroup hasValidation>
                          <Form.Control
                            type={showPassword ? "text" : item.type}
                            placeholder={item?.placeholder}
                            name={item.name}
                            value={values[item.name]}
                            onChange={handleChange}
                            isInvalid={
                              touched[item.name] && !!errors[item.name]
                            }
                            className={styles["input-form"]}
                          />
                          {!errors[item.name] && (
                            <InputGroup.Text id="inputGroupPrepend">
                              <button className={styles["btn-visible"]}>
                                {showPassword ? (
                                  <RemoveRedEyeIcon
                                    onClick={() => setShowPassword(false)}
                                  />
                                ) : (
                                  <VisibilityOffIcon
                                    onClick={() => setShowPassword(true)}
                                  />
                                )}
                              </button>
                            </InputGroup.Text>
                          )}
                          <Form.Control.Feedback type="invalid">
                            {errors[item.name]}
                          </Form.Control.Feedback>
                        </InputGroup>
                      )}

                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                }

                if (item.type === ATTR_TYPE.BUTTON_SUBMIT) {
                  return (
                    <Grid
                      size={12}
                      key={`form-submit-${9999 + index}`}
                      style={item.style}
                    >
                      {item.child.map((ch, idx) => (
                        <ButtonComponent
                          key={`form-submit-btn-${9999 + index + idx}`}
                          title={ch.label}
                          type={ch.type}
                          style={ch.style}
                        />
                      ))}
                    </Grid>
                  );
                }
                return null;
              })}
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default FormSubmit;
