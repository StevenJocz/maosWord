import type { Metadata } from "next";
import "../style/globals.css"

export const metadata: Metadata = {
  title: "Mao's Word",
  description: "Descubre tu potencial con MAO Word: el primer paso hacia el dominio del inglés comienza aquí. ¡Inscríbete y transforma tu futuro!",
  icons: {
    icon: ['./favicon.ico'],
    apple:  ['./favicon.ico'],   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
