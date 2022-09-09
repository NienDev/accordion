import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const log = console.log;
  const [active, setActive] = useState(() => {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      tmp.push(false);
    }
    return tmp;
  });

  // log(active);
  function handleClick(index) {
    setActive((prevActive) =>
      prevActive.map((prev, i) => (i != index ? prev : !prev))
    );
    // log(active);
  }

  const questionElements = data.map((item) => (
    <SingleQuestion
      handleClick={handleClick}
      key={item.id}
      index={item.id - 1}
      isActive={active[item.id - 1]}
      question={item.title}
      answer={item.info}
    />
  ));

  // log(questionElements);

  return (
    <div className="max-w-4xl mx-4 lg:mx-auto gap-4 flex bg-white my-16 p-8 rounded-xl shadow-xl flex-col lg:flex-row">
      <h3 className="font-semibold leading-8">
        Questions And Answers About Login
      </h3>
      <div className="grid grid-cols-1 gap-6 w-full">{questionElements}</div>
    </div>
  );
}

export default App;
