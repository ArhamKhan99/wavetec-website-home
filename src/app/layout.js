import "@/styles/globals.css";
import AppProvider from "@/providers/AppProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Wavetec",
  description:
    "WaveTec is a leading provider of enterprise-grade queue management solutions for banks and financial institutions.",
  keywords:
    "wavetec, wavetec solutions, wavetec queue management, wavetec banking, wavetec financial services, wavetec technology, wavetec technology solutions, wavetec technology queue management, wavetec technology banking, wavetec technology financial services, wavetec technology solutions, wavetec technology technology, wavetec technology technology solutions, wavetec technology technology queue management, wavetec technology technology banking, wavetec technology technology financial services, wavetec technology technology solutions",
  author: "Wavetec",
  icons: {
    icon: "/assets/wavetec-fav.png",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <AppProvider>
          <div className="bg-white dark:bg-[#0C0E12] min-h-screen flex flex-col">
          
           

            {/* ✅ Main Content */}
            <main className="flex-1">{children}</main>
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />

            {/* ✅ Footer Lazy Load */}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
