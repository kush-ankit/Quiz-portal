import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import CodeComponent from "@/components/play/codeComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <main className="w-full h-full grid place-items-center">
      <div className="w-full flex justify-around">
        <CodeComponent />
      </div>
    </main>
  );
}
