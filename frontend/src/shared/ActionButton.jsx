import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SelectedPage } from "./types";

const ActionButton = ({ children }) => {
  return (
    <RouterLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      to={`/${SelectedPage.ContactUs}`}
    >
      {children}
    </RouterLink>
  );
};

export default ActionButton;
