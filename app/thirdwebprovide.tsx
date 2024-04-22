"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { Sepolia } from "@thirdweb-dev/chains";

export default function ThirdWebProvide({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider 
	clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
	activeChain={Sepolia}>
      {children}
      <Toaster />
    </ThirdwebProvider>
  );
}
