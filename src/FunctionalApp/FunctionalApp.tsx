import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";
import { UserInformation } from "../types";

export const FunctionalApp = () => {
  const [userInfo, setUserInfo] = useState<UserInformation>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: ["", "", "", ""],
    formSubmitted: false
  });

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userInfo={userInfo} />
      <FunctionalForm setUserInfo={setUserInfo} />
    </>
  );
};
