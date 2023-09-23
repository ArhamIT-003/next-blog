"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading....</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrappper}>
        <div className={styles.socialBtn} onClick={() => signIn("google")}>
          Sign in Google
        </div>
        <div className={styles.socialBtn}>Sign in Github</div>
        <div className={styles.socialBtn}>Sign in Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
