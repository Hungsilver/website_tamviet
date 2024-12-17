import Footer from "@/components/layout/components/Footer";
import Header from "@/components/layout/components/Header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children};
      <Footer />
    </>
  );
}
