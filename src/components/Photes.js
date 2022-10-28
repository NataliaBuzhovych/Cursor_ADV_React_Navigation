import React from "react";
import { useLocation } from "react-router-dom";
import Ins from "../ins";

import Header from "./Header";

export default function Photes() {
  const { pathname } = useLocation();

  return (
    <div>
      <Header url={pathname} />
      <Ins />
    </div>
  );
}
