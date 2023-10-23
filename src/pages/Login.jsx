import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row, Stack, Button } from "react-bootstrap";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <Form className="p-5 w-50" onSubmit={handleSubmit(submit)}>
      <Stack gap={4}>
        <Form.Group controlId="email">
          <Row className="align-items-center">
            <Col sm={2}>
              <Form.Label className="m-0">Email</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
            </Col>
          </Row>
          {errors.email && (
            <span className="error-input">This field is required</span>
          )}
        </Form.Group>

        <Form.Group controlId="title">
          <Row className="align-items-center">
            <Col sm={2}>
              <Form.Label className="m-0">Password</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder=""
                {...register("password", {
                  required: true,
                  pattern: /^[0-9]*$/i,
                })}
              />
            </Col>
            {errors.password && (
              <span className="error-input">
                password must contain only numbers
              </span>
            )}
          </Row>
        </Form.Group>

        <Button type="submit" style={{ width: "fit-content", margin: "auto" }}>
          Login
        </Button>
      </Stack>
    </Form>
  );
}

export default Login;
