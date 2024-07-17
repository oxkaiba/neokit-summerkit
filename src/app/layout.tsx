import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { Providers } from "./providers";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  creator: "SummerKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterUsername,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      theme="light"
      settings={{
        environmentId: "cefeb691-0523-41e8-8945-f1913da0df3c",
        walletConnectors: [EthereumWalletConnectors],
        recommendedWallets: [{ walletKey: "coinbase" }],
      }}
    >
      <Providers>
        <DynamicWagmiConnector>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </DynamicWagmiConnector>
      </Providers>
    </DynamicContextProvider>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <body className={`${GeistSans.className} min-h-screen flex flex-col antialiased bg-background`}>
          <AppLayout>{children}</AppLayout>
        </body>
      </ThemeProvider>
    </html>
  );
}
