import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Darya Petrenko</title>
        <meta
          name="description"
          content="I am a Fullstack Developer specializing in JavaScript, React, TypeScript, Node.js, MongoDB, Nest.js, GraphQL, CSS, Html, Three.js. I build scalable and modern web applications using technologies like Next.js, Redux, Supabase, and Vite. Let’s collaborate to bring your vision to life!"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
