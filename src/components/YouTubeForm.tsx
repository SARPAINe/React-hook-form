import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  password: string;
};

export const YouTubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <>
      <h1>YouTube Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col ml-auto mr-auto w-fit"
      >
        <div className="mx-2 flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
            className="border border-white border-solid rounded-md bg-gray-800 focus:outline-none p-1"
          />
          <p className="text-red-700">{errors?.username?.message}</p>
        </div>
        <div className="mx-2 flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address"
                  );
                },
                blackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
            className="border border-white border-solid rounded-md bg-gray-800  focus:outline-none p-1"
          />
          <p className="text-red-700">{errors?.email?.message}</p>
        </div>
        <div className="mx-2 flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel is required" })}
            className="border border-white border-solid rounded-md bg-gray-800  focus:outline-none p-1"
          />
          <p className="text-red-700">{errors?.channel?.message}</p>
        </div>
        <div className="flex flex-col mx-2">
          <label htmlFor="channel">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="border border-white border-solid rounded-md bg-gray-800  focus:outline-none p-1"
          />
          <p className="text-red-700">{errors?.channel?.message}</p>
        </div>

        <button className="flex self-center rounded-md my-2 mx-2 p-1 bg-gray-900 w-fit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
