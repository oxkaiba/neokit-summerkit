import { http, createConfig } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [base, baseSepolia],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  connectors: [
    coinbaseWallet({
      appName: 'SummerKit',
      preference: 'smartWalletOnly',
    }),
  ],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
