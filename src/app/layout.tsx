import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/molecules/nav-bar";
import { Menu } from "../../constants/interfaces";
import { useMemo } from "react";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import QueryClientContextProvider from "@/context/query-client-context-provider";
import { Toaster } from "@/components/ui/toaster";
import { LoadingContextProvider } from "@/context/loading-context-provider";
export const dynamic = "force-dynamic";
const font = Inter({
  weight: "400",
  subsets: ["latin"],
});

const GetMenus = (): Menu[] => {
  const navBarContentTranslations = useTranslations("NavBar");

  return useMemo(
    () => [
      {
        title: navBarContentTranslations("products"),
        subMenus: [
          {
            title: navBarContentTranslations("createProduct"),
            href: "/product/create-product",
            description: navBarContentTranslations("createProductDescription"),
          },
          {
            title: navBarContentTranslations("createProduct"),
            href: "/docs/primitives/alert-dialog",
            description: navBarContentTranslations("createProductDescription"),
          },
          {
            title: navBarContentTranslations("createProduct"),
            href: "/docs/primitives/alert-dialog",
            description: navBarContentTranslations("createProductDescription"),
          },
          {
            title: navBarContentTranslations("createProduct"),
            href: "/docs/primitives/alert-dialog",
            description: navBarContentTranslations("createProductDescription"),
          },
        ],
      },
      {
        title: navBarContentTranslations("suppliers"),
        subMenus: [
          {
            title: navBarContentTranslations("listSupplier"),
            href: "/supplier/list-supplier",
            description: navBarContentTranslations("listSupplierDescription"),
          },
          {
            title: navBarContentTranslations("createSupplier"),
            href: "/supplier/create-supplier",
            description: navBarContentTranslations("createSupplierDescription"),
          },
        ],
      },
      {
        title: navBarContentTranslations("orders"),
        subMenus: [
          {
            title: navBarContentTranslations("createOrder"),
            href: "/docs/primitives/alert-dialossg",
            description: navBarContentTranslations("createOrderDescription"),
          },
          {
            title: navBarContentTranslations("createOrder"),
            href: "/docs/primitives/alert-dialossg",
            description: navBarContentTranslations("createOrderDescription"),
          },
          {
            title: navBarContentTranslations("createOrder"),
            href: "/docs/primitives/alert-dialossg",
            description: navBarContentTranslations("createOrderDescription"),
          },
          {
            title: navBarContentTranslations("createOrder"),
            href: "/docs/primitives/alert-dialossg",
            description: navBarContentTranslations("createOrderDescription"),
          },
        ],
      },
    ],
    [navBarContentTranslations]
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <NextIntlClientProvider>
        <body className={font.className}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <NavBar menus={GetMenus()} />
          </div>
          <LoadingContextProvider>
            <QueryClientContextProvider>{children}</QueryClientContextProvider>
          </LoadingContextProvider>
        </body>
        <Toaster />
      </NextIntlClientProvider>
    </html>
  );
}
