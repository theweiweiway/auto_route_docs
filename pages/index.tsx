import Router from "next/router";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Router.push("/introduction");
  }, []);

  const logo = require("../src/assets/logo_complete.png");
  return <div></div>;
}
