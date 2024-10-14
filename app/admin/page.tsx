import { isAdminRole } from "@/lib/auth";

import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

export default function AdminPage() {
  if (!isAdminRole()) {
    redirect("/");
  }

  return <App />;
}
