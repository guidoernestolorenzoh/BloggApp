import { Card, Button, Separator, Spinner } from "@heroui/react";
import { Icon } from "@iconify/react";
import Logo from "./../assets/logo.png";
import { useState } from "react";
import { Person, Key, Envelope } from "@gravity-ui/icons";

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // try {
      setTimeout(() => {
        window.location.href = "/"
      }, 1000);
    // } catch (error) {
    //   console.error(error);
    //   setLoading(false);
    // }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf7f4]">
      <Card
        variant="transparent"
        className="relative flex w-full max-w-md bg-transparent shadow-none"
      >
        <img
          src={Logo}
          className="my-4 mx-auto"
          alt="Logo"
          height={150}
          width={150}
        />

        <Card.Header className="flex gap-y-1 mb-2">
          <Card.Title className="text-2xl text-gray-600 font-semibold">
            {haveAccount ? "Log In to your account" : "Sign Up for an account"}
          </Card.Title>
        </Card.Header>
        <form className="space-y-5">
          {/* name */}
          {!haveAccount && (
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
              <div className="flex gap-1">
                Name
                <span className="text-red-500">*</span>
              </div>
              <div className="relative">
                <Person className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full transition-all rounded-full border border-transparent bg-white py-3.5 pl-11 pr-4 text-sm text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.06)] outline-none placeholder:text-gray-400 focus:border-gray-200 focus:ring-0"
                />
              </div>
            </label>
          )}
          {/* Email */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
            <div className="flex gap-1">
              Email
              <span className="text-red-500">*</span>
            </div>
            <div className="relative">
              <Envelope className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="w-full rounded-full border border-transparent bg-white py-3.5 pl-11 pr-4 text-sm text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.06)] outline-none placeholder:text-gray-400 focus:border-gray-200 focus:ring-0"
              />
            </div>
          </label>
          {/* Password */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-600">
            <div className="flex gap-1">
              Password
              <span className="text-red-500">*</span>
            </div>
            <div className="relative">
              <Key className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full rounded-full border border-transparent bg-white py-3.5 pl-11 pr-4 text-sm text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.06)] outline-none placeholder:text-gray-400 focus:border-gray-200 focus:ring-0"
              />
            </div>
          </label>
          <div className="flex w-full items-center gap-3 px-4 text-gray-400">
            <Separator className="flex-1" />
            <span className="shrink-0 text-sm">or</span>
            <Separator className="flex-1" />
          </div>
          {/* social icons */}
          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            {haveAccount ? "Sign in with Google" : "Sign up with Google"}
          </Button>
          <Card.Footer className="mt-1 flex flex-col gap-2">
            <Button
              className="w-full h-12 mt-4"
              onClick={handleSubmit}
              isDisabled={loading || !email || !password}
              type="submit"
            >
              {loading ? (
                <>
                  <Spinner color="current" size="sm" />
                  <span>{haveAccount ? "Sign In..." : "Sign Up..."}</span>
                </>
              ) : (<span>{haveAccount ? "Sign In" : "Sign Up"}</span>)}
            </Button>
            <div className="flex">
              <p className="text-sm text-gray-500">
                {haveAccount
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Button
                  variant="ghost"
                  onClick={() => setHaveAccount(!haveAccount)}
                >
                  <span className="text-blue-300">
                    {haveAccount ? "Create one" : "Sign in"}
                  </span>
                </Button>
              </p>
            </div>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default Login;
