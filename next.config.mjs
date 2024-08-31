import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/supplier/list-supplier",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig, "./i18n.ts");
