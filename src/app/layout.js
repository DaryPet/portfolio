import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Darya | Creative Developer</title>
        <meta
          name="description"
          content="I am a Fullstack Developer specializing in JavaScript, React, TypeScript, Node.js, MongoDB, Nest.js, GraphQL, CSS, Html, Three.js. I build scalable and modern web applications using technologies like Next.js, Redux, Supabase, and Vite."
        />
        <link
          rel="preload"
          href="/fonts/BRSegma-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BRSegma-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
