import StoreProvider from "@/lib/store/provider";
import "./globals.scss";
import "./fonts.scss";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

export const metadata = {
  title: "فروشگاه",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ir" dir="rtl">
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
