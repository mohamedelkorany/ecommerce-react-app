import { useState } from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const regex = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    username: /^[a-zA-Z0-9_]{3,20}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!regex.name.test(formData.name)) {
      newErrors.name = "Name must be 2-50 letters only.";
    }

    if (!regex.email.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!regex.username.test(formData.username)) {
      newErrors.username = "Username must be 3-20 chars, letters/numbers/_ only.";
    }

    if (!regex.password.test(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, with at least 1 uppercase, 1 number, and 1 special char.";
    }
    if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password.";
    }
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registered Successfully!");
    }
  };

  return (
    <>
      <Form className="w-50 mx-auto border p-3 bg-light" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name}/>
          <Form.Control.Feedback type="invalid" >{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email}/>
          <Form.Control.Feedback type="invalid" >{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="username" value={formData.username} onChange={handleChange} isInvalid={!!errors.username}/>
          <Form.Control.Feedback type="invalid" >{errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} isInvalid={!!errors.password}/>
          <Form.Control.Feedback type="invalid" >{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="ConfirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} isInvalid={!!errors.confirmPassword}/>
          <Form.Control.Feedback type="invalid" >{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </Form>
    </>
  );
};

export default Register;
