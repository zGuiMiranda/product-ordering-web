import SupplierCreation from "./page";

export default async function LocaleLayout({
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <SupplierCreation />
      </body>
    </html>
  );
}
