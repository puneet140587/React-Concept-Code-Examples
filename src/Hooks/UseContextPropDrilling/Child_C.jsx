import React from "react";
import { useContext } from "react";

import { data } from "./ContextParent";

export default function Child_C() {
  const fullname = useContext(data);

  return (
    <div>
      <h1>
        Hi my name is {fullname.name} & my gender is {fullname.gender}
        {/*  Hi my name is {fullname} */}
      </h1>
    </div>
  );
}
