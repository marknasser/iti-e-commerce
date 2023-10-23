import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row, Stack, Button } from "react-bootstrap";
import Select from "react-select";

function Signup() {
  const [selectedGender, setSelectedGender] = useState();
  const [selectedHobbies, setSelectedHobbies] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    data.gender = selectedGender?.value;
    data.hobbies = selectedHobbies && selectedHobbies;

    console.log(data);
    console.log(errors);
  };

  const genderOptions = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  const hobbiesOptions = [
    { value: "running", label: "running" },
    { value: "reading", label: "reading" },
    { value: "swimming", label: "swimming" },
  ];

  return (
    <Form className="p-5 w-50" onSubmit={handleSubmit(submit)}>
      <Stack gap={4}>
        <Form.Group controlId="name">
          <Row className="align-items-center">
            <Col sm={2}>
              <Form.Label className="m-0">Name</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </Col>
            {errors.name && (
              <span className="error-input">This field is required</span>
            )}
          </Row>
        </Form.Group>

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

        {/* <Select name="gender" options={genderOptions} {...register("gender")} />   does not work*/}
        <Form.Group controlId="gender">
          <Row className="align-items-center">
            <Col sm={2}>
              <Form.Label className="m-0">(opitional) gender</Form.Label>
            </Col>
            <Col>
              <Select
                name="gender"
                options={genderOptions}
                onChange={(val) => {
                  setSelectedGender(val);
                }}
              />
            </Col>
            {errors.password && (
              <span className="error-input">
                password must contain only numbers
              </span>
            )}
          </Row>
        </Form.Group>
        <Form.Group controlId="gender">
          <Row className="align-items-center">
            <Col sm={2}>
              <Form.Label className="m-0">(opitional) hobbies</Form.Label>
            </Col>
            <Col>
              <Select
                name="hobbies"
                options={hobbiesOptions}
                onChange={(vals) => {
                  setSelectedHobbies(vals.map((val) => val.value));
                }}
                isMulti
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
          Sign up
        </Button>
      </Stack>
    </Form>
  );
}

export default Signup;
