import React, { useState } from "react";

const Question = (props) => {
  return (
    <div className="shadow-md border p-6 pb-2 rounded-sm">
      <div className="flex justify-between">
        <h4 className="font-bold">{props.question}</h4>
        <span
          className="relative bottom-2 cursor-pointer"
          onClick={() => props.handleClick(props.index)}
        >
          {props.isActive ? (
            <i class="fa fa-solid fa-minus"></i>
          ) : (
            <i class="fa fa-solid fa-plus"></i>
          )}
        </span>
      </div>
      {props.isActive && <p>{props.answer}</p>}
    </div>
  );
};

export default Question;
