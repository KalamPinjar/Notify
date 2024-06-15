/* eslint-disable react/prop-types */
import Button from "./Button";
import Input from "./Input";

const Login = ({ text, action, isRegistered }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[300px] h-fit p-5 bg-[#f8f8f848] text-white shadow-lg ">
        <h1 className="p-2 text-3xl font-bold text-center border-b-2">
          {text}
        </h1>

        <form
          className="flex flex-col gap-3 mt-5"
          action={action}
          method="post"
        >
          <Input type="text" name="email" placeholder="Email" required={true} />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
          />

          {!isRegistered && (
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required={true}
            />
          )}

          <Button onClick={() => {}} type={"submit"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
