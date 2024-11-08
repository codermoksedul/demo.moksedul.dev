"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const redirectUrl = "https://moksedul.dev";

  useEffect(() => {
    router.push(redirectUrl);
  }, [router, redirectUrl]);

  return null;
}
