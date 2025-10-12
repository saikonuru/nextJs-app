"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      New User Page
      <br />
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create{" "}
      </button>
    </div>
  );
};

export default NewUserPage;
