import LoginForm from "@/components/authcomp/loginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Login() {

    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard/");

    return (
        <main className="w-full h-full grid place-items-center">
            <div>
                <LoginForm />
            </div>
        </main>
    )
}
