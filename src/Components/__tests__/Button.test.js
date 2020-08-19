import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Button from "../Atoms/Button";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Button />);
});
