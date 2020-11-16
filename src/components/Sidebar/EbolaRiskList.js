import React from "react";
import { BlockPadded } from "../styled-components/Block";

const EbolaRiskList = () => (
  <BlockPadded>
    <strong>
      <p>
        The top 10 countries with the highest relative risk of Ebola spread are:
      </p>
    </strong>

    <ol>
      <li>Guinea</li>
      <li>Nigeria</li>
      <li>Ivory Coast</li>
      <li>Sierra Leone</li>
      <li>Mali</li>
      <li>Liberia</li>
      <li>Senegal</li>
      <li>Ghana</li>
      <li>Burkina Faso</li>
      <li>Democratic Republic of the Congo</li>
    </ol>
  </BlockPadded>
);

export default EbolaRiskList;
