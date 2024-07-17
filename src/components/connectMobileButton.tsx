"use client"

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function ConnectMobileWalletButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <Card className='mb-1 bg-white border-black w-full flex items-center justify-center'>
        <DynamicWidget />
      </Card>

    ) : (
      <Button onClick={() => setShowAuthFlow(true)} className="text-foreground w-full">
        <div className='flex items-center'>
          <p>Connect&nbsp;Wallet</p>
        </div>
      </Button>
    )
  );
}
