import LoginForm from "@/components/authcomp/loginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import RoomCodeForm from "@/components/roomcomp/roomCodeForm";
export default async function Home() {

  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="w-full h-full grid place-items-center">
      <div className="w-full flex justify-around">
        <LoginForm />
        <RoomCodeForm />
      </div>
    </main>
  );
}
