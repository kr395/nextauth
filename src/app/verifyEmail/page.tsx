"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import Link from "next/link";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, seterror] = useState(false);

  // spiting token form the url using Next Js
  // const router = useRouter();

  const verifyUser = async () => {
    try {
      await axios.post("/api/users/verifyEmail", { token });
      setVerified(true);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    // how to get token using next js
    // const { token } = router.query;

    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "no token"}
      </h2>

      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
      <button className="p-2 bg-green-500 mt-3 " onClick={() => verifyUser()}>Verify Email</button>
    </div>
  );
};

export default VerifyEmail;
