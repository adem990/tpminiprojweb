
import React from "react";

const Login = () => {
  const imageSrc =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9e35329b504b57d63725510c8b9930343a86addb6beecd35204f020429517244?placeholderIfAbsent=true&apiKey=32ae4917f384456b9dac610e2556af3d";
  const altText = "Login section main image";

  return (
    <main style={styles.container}>
      <section style={styles.imageSection}>
        <img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          style={styles.image}
        />
      </section>
      <h1 style={styles.title}>Login</h1>
      <div style={styles.separator}></div>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          style={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.inputField}
        />
        <button style={styles.button}>LOGIN</button>
        <a href="#" style={styles.forgotPassword}>
          Forgot Password?
        </a>
      </form>
    </main>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  imageSection: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transform: "rotate(14deg)",
    opacity: 0.1,
  },
  title: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    fontSize: "50px",
    color: "#282828",
    margin: "20px 0",
  },
  separator: {
    width: "92px",
    height: "5px",
    backgroundColor: "#1a22ec",
    margin: "20px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
  },
  inputField: {
    width: "100%",
    padding: "10px 15px",
    fontSize: "16px",
    border: "2px solid #000",
    borderRadius: "5px",
    marginBottom: "20px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "15px 0",
    backgroundColor: "#1a22ec",
    color: "#ffffff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  forgotPassword: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    color: "#4863f1",
    textDecoration: "none",
  },
};

export default Login;
