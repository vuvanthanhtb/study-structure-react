import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          margin: "0",
          color: "#1a1a1a",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          margin: "1rem 0",
          color: "#333",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "2rem",
        }}
      >
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.1rem",
        }}
      >
        Return Home
      </a>
    </div>
  );
};

export default NotFoundPage;
