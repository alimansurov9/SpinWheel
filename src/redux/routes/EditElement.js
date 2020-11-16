import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormGroup,
  Grid,
  Link,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Formik } from "formik";
import myValidator from "validator";
import { useHistory } from "react-router-dom";
import Axios from "axios";
// import { registerUser } from "../redux/auth/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  btnSubmit: {
    width: "100%",
    margin: "20px 0",
  },
  inp: {
    margin: "10px 0",
  },
  signUpLink: {
    display: "block",
    textAlign: "end",
  },
  formWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
}));

export default function EditElement(props) {
  console.log("edit " + props.title);
  const classes = useStyles();
  // const history = useHistory();
  // const dispatch = useDispatch();

  const EditForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <form onSubmit={handleSubmit}>
      <h4>Изменить элемент</h4>
      <FormGroup>
        <TextField
          label="Введите название картины"
          className={classes.inp}
          type="text"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          helperText={!!errors.title && errors.title}
          error={!!errors.title && touched.title}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Введите описание"
          className={classes.inp}
          type="text"
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          helperText={!!errors.description && errors.description}
          error={!!errors.description && touched.description}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Цена за товар"
          className={classes.inp}
          type="number"
          name="price"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.price}
          helperText={!!errors.price && errors.price}
          error={!!errors.price && touched.price}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Введите автора"
          className={classes.inp}
          type="text"
          name="author"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.author}
          helperText={!!errors.author && errors.author}
          error={!!errors.author && touched.author}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Введите ссылку для картинки"
          className={classes.inp}
          type="text"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.image}
          helperText={!!errors.image && errors.image}
          error={!!errors.image && touched.image}
        />
      </FormGroup>
      <Button
        className={classes.btnSubmit}
        type="submit"
        disabled={isSubmitting}
        color="primary"
        variant="contained"
      >
        Изменить
      </Button>
    </form>
  );

  const validator = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Это поле обязательно!";
    }

    if (!values.email.trim()) {
      errors.email = "Это поле обязательно!";
    } else if (!myValidator.isEmail(values.email)) {
      errors.email = "Неправильный email!";
    }

    if (!values.phone) {
      errors.phone = "Это поле обязательно!";
    } else if (values.phone.length < 10) {
      errors.phone = "Минимальная длина пароля 10 символов";
    }

    if (!values.password) {
      errors.password = "Это поле обязательно!";
    } else if (values.password.length < 6) {
      errors.password = "Минимальная длина пароля 6 символов";
    }
    if (!values.password2) {
      errors.password2 = "Это поле обязательно";
    } else if (values.password !== values.password2) {
      errors.password2 = "Пароли не совпадают";
    }
    return errors;
  };

  const handleFormSubmit = (values) => {
    Axios.post(process.env.REACT_APP_API_URL + "/products", values);
    window.location.replace("/");
  };

  return (
    <div>
      <Container maxWidth="md">
        <Grid className={classes.formWrapper} container justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <Card>
              <CardContent>
                <Formik
                  initialValues={{
                    title: "",
                    description: "",
                    price: "",
                    author: "",
                    image: "",
                  }}
                  // validate = {validator}
                  onSubmit={handleFormSubmit}
                >
                  {EditForm}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
