import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";
import { UserInformation } from "../types";

export const FunctionalApp = () => {
  const [userInfo, setUserInfo] = useState<UserInformation | null>(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userInfo={userInfo} />
      <FunctionalForm setUserInfo={setUserInfo} />
    </>
  );
};
