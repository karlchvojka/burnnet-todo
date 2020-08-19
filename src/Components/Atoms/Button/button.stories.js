import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from './index.js';

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#000", default: true}]
  })
  .add("Base", ()=> <Button>Base</Button>)
