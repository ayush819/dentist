import "./globals.css";
import { SiteShell } from "./site-shell";

export const metadata = {
  title: "SF Family Dentistry | Personalized Dental Care in Union Square",
  description: "Personalized family, cosmetic and emergency dentistry in Union Square, San Francisco.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
