import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../components/button";
import { ATTR_TYPE } from "shared/utils";
import styles from "./_form-search.module.scss";

const FormSearch = (props) => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    config,
    handleRefresh,
    handleExport,
  } = props;

  return (
    <div className={styles["form-search-container"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form
            onSubmit={handleSubmit}
            noValidate
            className={styles["form-content"]}
          >
            <Grid
              container
              spacing={2}
              size={12}
              className={styles["form-content-grid"]}
            >
              {config.map((item, index) => {
                if (item.type === ATTR_TYPE.STRING) {
                  return (
                    <Grid key={`form-submit-${9999 + index}`} size={item.size}>
                      <Form.Group
                        as={Col}
                        md={12}
                        controlId="validationFormik03"
                      >
                        <Form.Label>{item.label}</Form.Label>
                        <Form.Control
                          type={item.type}
                          placeholder={item?.placeholder}
                          name={item.name}
                          value={values[item.name]}
                          onChange={handleChange}
                          isInvalid={touched[item.name] && !!errors[item.name]}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors[item.name]}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Grid>
                  );
                }

                if (item.type === ATTR_TYPE.BUTTON) {
                  return (
                    <Grid
                      size={item.size}
                      key={`form-submit-${9999 + index}`}
                      style={item.style}
                      className={styles["btn-group"]}
                    >
                      {item.child.map((ch, idx) => {
                        if (ch.type === ATTR_TYPE.BUTTON_REFRESH) {
                          return (
                            <ButtonComponent
                              key={`form-submit-btn-${9999 + index + idx}`}
                              title={ch.label}
                              type="button"
                              style={ch.style}
                              onClick={handleRefresh}
                            />
                          );
                        }
                        if (ch.type === ATTR_TYPE.BUTTON_EXPORT) {
                          return (
                            <ButtonComponent
                              key={`form-submit-btn-${9999 + index + idx}`}
                              title={ch.label}
                              type="submit"
                              style={ch.style}
                              onClick={handleExport}
                            />
                          );
                        }
                        return (
                          <ButtonComponent
                            key={`form-submit-btn-${9999 + index + idx}`}
                            title={ch.label}
                            type={ch.type}
                            style={ch.style}
                          />
                        );
                      })}
                    </Grid>
                  );
                }
                return null;
              })}
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSearch;
