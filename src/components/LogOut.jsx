"use client";
import React from "react";
import Button from "./button/Button";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/client";

const LogOut = () => {
  const supabase = createClient();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };
  return (
    <>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default LogOut;
