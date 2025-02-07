import React, { ReactNode } from "react";
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from "@/contexts/themeContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScrolling } from "@/components/ui";
import "@/assets/scss/style.scss";

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
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <AnimatedCursor
            innerSize={12}
            innerStyle={{ backgroundColor: "#9c27b0" }}
            outerSize={50}
            outerScale={1}
            outerStyle={{
              border: "1px solid #9c27b0 ",
              backgroundColor: "transparent",
            }}
          />
          {/* <SmoothScrolling> */}
          <Header />
          {children}
          <Footer />
          {/* </SmoothScrolling> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
