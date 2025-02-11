"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [canSubmit, setCanSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      console.log("Signup success", response.data);

      toast.success("Registered successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Register error", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [user]);
  return( <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <h1>{loading ? "Processing" : "Input your details"}</h1>
  </div>);
};

export default Register;
