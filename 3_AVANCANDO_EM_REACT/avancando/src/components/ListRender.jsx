import { useState } from "react";

const ListRender = () => {
  const [List] = useState(["Ediberto", "Ferreira", "Alves"]);

  return (
    <div>
      <ul>
        {List.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
