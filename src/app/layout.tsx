import React, { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   dispatch(getMenu()).then(() => {
  //     setLoading(true);
  //   });
  // }, []);

  // if (!loading) return <Loader />;
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
