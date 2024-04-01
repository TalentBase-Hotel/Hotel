import { Button, Form, Input, Tag } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (value: string) => {
    console.log(value);
  };
  return (
    <div className="grid place-items-center pt-28">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-white">Register Form</h1>
        <Form onFinish={onFinish} className="flex w-[400px] flex-col gap-2">
          <Form.Item
            className="m-0"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input size="large" placeholder="First name" />
          </Form.Item>
          <Form.Item
            className="m-0"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input size="large" placeholder="Last name" />
          </Form.Item>
          <Form.Item
            className="m-0"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input size="large" placeholder="Phone" prefix={<Tag>+998</Tag>} />
          </Form.Item>
          <Form.Item
            className="m-0"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <button
            type="submit"
            onClick={() => navigate("/auth/login")}
            className="bg-green-500 text-white p-2 rounded-lg  hover:bg-green-400 active:translate-y-1"
          >
            Register
          </button>

          <Link to="/auth/login" className="w-max self-end">
            Go to Login
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
