import { USER } from "../constants/auth";

export const getUser = () =>
  localStorage[USER]
    ? JSON.parse(localStorage[USER])
    : { authenticated: false, id: "" };
