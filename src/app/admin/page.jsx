"use client"
import { useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };



function Admin() {
  useEffect(() => {
    const checkAuthentication = async () => {
      const user = supabase.auth.user();

      if (user) {
        console.log("User is authenticated:", user);
      } else {
        console.log("User is not authenticated");
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div className="flex justify-center py-60">
      <div className="flex flex-col w-72 ">
        {" "}
        <h1 className="mx-auto my-2 text-2xl">Admin Dashboard</h1>
        <input className="py-2 my-2 rounded" placeholder="username"></input>
        <input className="py-2 my-2 rounded" placeholder="password"></input>
        <button
          className="py-2 my-2 bg-amber-400 rounded-lg"
          type="button"
          onClick={async () => {
            const { error } = await supabase.auth.signIn({
              email,
              password,
            });
            if (error) {
              console.error("Sign in error:", error);
            } else {
              console.log("User signed in successfully");
            }
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Admin;
