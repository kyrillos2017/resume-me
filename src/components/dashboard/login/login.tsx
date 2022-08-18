import { FormEvent, Fragment, useRef } from "react";
import SwitchModeBtn from "../../../Layout/public-layout/navbar/switch-mode-btn";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {signInWithEmailAndPassword} from 'firebase/auth'


const Login = () => {

  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  const loginHandler = (event: FormEvent) => {
    event.preventDefault();

    console.log(emailRef?.current?.value);
    console.log(passwordRef?.current?.value);
    
  };
  return (
    <Fragment>
      <div className="fixed top-3 right-3">
        <SwitchModeBtn />
      </div>
      <div
        className="flex justify-center items-center h-full mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="rounded p-4 text-center">
          <Typography
            className="text-center text-4xl mb-3 dark:text-white"
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={loginHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          {/* <Input label="User Name" input={{ id: "username", type: "text" }} />
            <Input label="Password" input={{ id: "password", type: "password" }} />
            <button className="py-1 px-5 mt-3 font-bold rounded bg-white text-blue-600">Login</button> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
