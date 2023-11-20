import React, { useState } from "react";
import ProcessDataProvider from "./ProcessDataContext";

import Process from "./process";

function MultiStep() {
  const [data, setData] = useState({
    month: "",
    date: "",
    airport: "",
    days: "",
    type: "",
    city: "",
    place: "",
  });

  return (
    <ProcessDataProvider data={data}>
      <Process />
    </ProcessDataProvider>
  );
}

export default MultiStep;
