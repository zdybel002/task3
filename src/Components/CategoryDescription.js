import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function CategoryDescription() {
  let { userName } = useParams();
  return (
    <>
      <h1>Category: {userName}</h1>
    </>
  );
}

export default CategoryDescription;
