import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

export interface FormValues {
  question: string;
  answer: string;
}

const options = [
  {
    value: "School",
    label: "What was the name of your first school?",
  },
  {
    value: "Friend",
    label: "What was the name of your childhood best friend",
  },
  {
    value: "Toy",
    label: "What is the name of your favorite toy?",
  },
];

export const SecurityQuestion = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const [question, setSelectedQuestion] = useState(null);

  const handleSubmitForm = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div>SecurityQuestion</div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col mx-2">
          <label htmlFor="question">Set of questions</label>
          <Select
            id="question"
            options={options}
            // className="border border-solid border-gray-700 outline-none"
            // classNames={{
            //   control: (state) =>
            //     state.isFocused
            //       ? "border-green shadow-[0_0_0_1px_green]"
            //       : "border-red shadow-[0_0_0_1px_red]",
            // }}
            // {...register("question")}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                display: "flex",
                borderRadius: "5px",
                borderColor: state.isFocused ? "green" : "red",
                boxShadow: state.isFocused
                  ? "0 0 0 1px green"
                  : "0 0 0 1px red",
                // borderBlockColor:hover:"red"
                "&:hover": {
                  // Define styles for hover effect on the control component
                  borderColor: "green",
                  boxShadow: "0 0 0 1px green",
                },
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: "red",
              }),
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "blue",
              }),
            }}
          />
        </div>
        <div className="flex flex-col mx-2">
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            id="answer"
            {...register("answer")}
            className="border border-solid border-gray-700 focus:border-lime-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col mx-2">
          <button type="submit" className="bg-blue-700 mt-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
