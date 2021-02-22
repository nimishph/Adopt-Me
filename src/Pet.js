// if we do not import React then we get following error -
//'React' must be in scope when using JSX

import React from "react";

export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);

  return (
    <div>
      {/* the div gets transpiled to React.createElement("div", {}... */}
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
