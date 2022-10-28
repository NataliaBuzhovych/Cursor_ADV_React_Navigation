import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Find from "../PB/phonebook.js";

export default function UsersPage() {
  const { pathname } = useLocation();
  return (
    <div className="users">
      <Header url={pathname} />
      <Find />
    </div>
  );
}
