import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import { contacts } from "../PB/Contacts";
import "../PB/stylePB.css";

export default function Userpage() {
  const { pathname } = useLocation();
  const userId = useParams();

  const user = contacts.find((el) => el.id === +userId.id);
  contacts.map((el) => {
    if (el.gender) {
      if (el.gender.toLowerCase() === "male") {
        el.gender = "♂";
      }
      if (el.gender.toLowerCase() === "female") {
        el.gender = "♀";
      }
    }
  });

  const { firstName, lastName, phone, gender } = user;

  return (
    <div>
      <Header url={pathname} />
      <div className="contact-section">
        <p className="name">
          {firstName} {lastName}
        </p>
        <p className="info">
          {gender} {phone}
        </p>
        <hr></hr>
      </div>
    </div>
  );
}
