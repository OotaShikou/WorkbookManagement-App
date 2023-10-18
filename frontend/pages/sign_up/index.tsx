import { useState } from "react";
import {
  Link,
  Typography,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/utils/Copyright";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import router from "next/router";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const axiosInstance = axios.create({
      baseURL: `http://localhost/manage/api/v1/`,
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    });
    (async () => {
      setIsError(false);
      setErrorMessage("");
      try {
        const response = await axiosInstance.post("auth", {
          email: data.get("email"),
          password: data.get("password"),
          password_confirmation: data.get("password_confirmation"),
          name: data.get("name"),
          confirm_success_url: "http://localhost/sign_in",
        });
        // Cookieにトークンをセットしています
        setCookie(null, "uid", response.headers["uid"], {
          path: "/",
        });
        setCookie(null, "client", response.headers["client"], {
          path: "/",
        });
        setCookie(null, "access-token", response.headers["access-token"], {
          path: "/",
        });
        router.push("/dashboard");
      } catch (error) {
        // Cookieからトークンを削除しています
        destroyCookie(null, "uid");
        destroyCookie(null, "client");
        destroyCookie(null, "access-token");
        setIsError(true);
        setErrorMessage("エラーが発生しました。");
      }
    })();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="名前"
                  name="name"
                  type="text"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="メールアドレス"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="パスワード"
                  name="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="パスワード確認用"
                  name="password_confirmation"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              新規登録
            </Button>
            {isError ? (
              <Alert
                onClose={() => {
                  setIsError(false);
                  setErrorMessage("");
                }}
                severity="error"
              >
                {errorMessage}
              </Alert>
            ) : null}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="../sign_in" variant="body2">
                  すでにアカウントをお持ちの方はこちら
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
