"use client";
import { useLoginMutation } from "@/redux/features/apiSlice";
import { TextField, Button, Paper, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = loginData;
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    const bodyData = {
      username: userName,
      password: password,
    };
    try {
      const response = await login(bodyData);
      console.log(response);

      const { data, error } = await login(JSON.stringify(bodyData));
      console.log(data, error);

      if (error) {
        setText(error.data.error);
        setError(true);
      } else {
        setText(data.message);
        setIsLoginSuccess(true);
        setTimeout(() => {
          setIsLoginSuccess(false);
        }, 2500);
        router.push("/table");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const handleChange = (inputValue: string, field: string) => {
    setError(false);
    setLoginData((prevData) => ({
      ...prevData,
      [field]: inputValue,
    }));
  };

  return (
    <Paper className="p-5 w-[50%] min-w-[275px] flex flex-col gap-2.5">
      {isLoginSuccess && <Alert severity="success">{text}</Alert>}
      <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
        <TextField
          type="name"
          placeholder="Your name"
          fullWidth
          name="name"
          variant="outlined"
          value={userName}
          onChange={(e) => handleChange(e.target.value, "userName")}
          required
          autoFocus
        />
        <TextField
          type="password"
          placeholder="Password"
          fullWidth
          name="password"
          variant="outlined"
          value={password}
          onChange={(e) => handleChange(e.target.value, "password")}
          required
        />
        {error && <span>{text}</span>}
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
}
