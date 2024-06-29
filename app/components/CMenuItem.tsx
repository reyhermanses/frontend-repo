"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { Box, Button } from "@mui/material";

const CMenuItem = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Button key="Home" sx={{ color: "#fff" }}>
        <Link href="/">Home</Link>
      </Button>
      <Button key="Profile" sx={{ color: "#fff" }}>
        <Link href="/profile">Profile</Link>
      </Button>
      <Button key="Users" sx={{ color: "#fff" }}>
        <Link href="/users">Users</Link>
      </Button>

      {loading ? null : !user ? (
        <Button onClick={handleSignIn} key="Login" sx={{ color: "#fff" }}>
          Login
        </Button>
      ) : (
        <Button onClick={handleSignOut} key="Logout" sx={{ color: "#fff" }}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default CMenuItem;
