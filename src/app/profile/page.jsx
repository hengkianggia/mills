import React from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import LogOut from "@/components/LogOut";

const ProfilePage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  console.log(data);

  return (
    <>
      <p>User ID {data.user.id}</p>
      <LogOut />
    </>
  );
};

export default ProfilePage;
