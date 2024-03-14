import RegisterForm from "@/components/authcomp/registerForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function RegisterPage() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
    return (
        <div className="w-full h-full grid place-items-center">
            <div className="w-full">
                <RegisterForm />
            </div>
        </div>
    )
}
