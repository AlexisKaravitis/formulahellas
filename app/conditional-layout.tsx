import NavigationClient from "@/components/NavigationClient";
import FooterClient from "@/components/FooterClient";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationClient />
      <main className="min-h-screen">{children}</main>
      <FooterClient />
    </>
  );
}
