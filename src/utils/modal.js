import { INSTRUCTIONS } from "../constants/instructions";

export const MODALS = {
  auth: false,
  postProperty: false,
  instructions: false,
};

export const setInstructions = (instructions) => {
  localStorage.setItem(INSTRUCTIONS, JSON.stringify(instructions));
};

export const getInstructions = () =>
  localStorage[INSTRUCTIONS]
    ? JSON.parse(localStorage[INSTRUCTIONS])
    : undefined;
