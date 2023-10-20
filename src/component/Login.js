import React, { useState } from "react";
import { TextInput, Button, Group, Box, Center, Alert } from "@mantine/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState("");
  const doLogin = async () => {
    console.log("username", username);
    console.log("password", password);

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        // username: "mor_2314",
        // password: "83r5^_",
        username: username,
        password: password,
      }),
    });
    // const resJson = await response.json();
    if (response.status === 200) {
      setLoginData("successfully login!");
    } else {
      setLoginData("seems something wrong!");
    }
  };
  return (
    <Box maw={340} mx="auto">
      {loginData.length > 0 ? (
        <Alert variant="light" color="blue" title="Message">
          {loginData}
        </Alert>
      ) : null}
      <TextInput
        label="Username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        label="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Group mt={"md"}>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            doLogin();
          }}
        >
          Login
        </Button>
      </Group>
      {/* </form> */}
    </Box>
  );
};

export default Login;
