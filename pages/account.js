import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

function Button({ Icon, children, style, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className={`flex gap-2 px-6 py-4 items-center justify-center cursor-pointer hover-transition ${style}`}
    >
      <Icon />
      {children}
    </div>
  );
}

function Account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="max-w-[400px] w-full mx-auto mt-[50px] h-[calc(100vh-50px)]">
      <h2 className="text-2xl font-bold">Login</h2>
      <p className="my-4">Choose the account you want to sign in with.</p>
      <div className="flex flex-col gap-4">
        <Button
          Icon={AiOutlineGithub}
          style="bg-slate-700 hover:bg-slate-800"
          handleClick={signIn}
        >
          <p>
            Sign in with <span className="font-bold">Github</span>
          </p>
        </Button>
        <Button
          Icon={AiOutlineGoogle}
          style="bg-sky-700 hover:bg-sky-800"
          handleClick={signIn}
        >
          <p>
            Sign in with <span className="font-bold">Google</span>
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Account;
