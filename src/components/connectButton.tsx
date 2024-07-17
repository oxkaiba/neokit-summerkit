"use client";

import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function CustomConnectButton() {
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  return (
    isLoggedIn ? (
      <Card className='p-0.5 bg-white border-black w-full flex items-center justify-center'>
        <DynamicWidget />
      </Card>
    ) : (
      <Button
        className="text-lg font-semibold text-foreground"
        onClick={() => setShowAuthFlow(true)}
      >
        Connect&nbsp;Wallet
      </Button>
    )
  );
}
