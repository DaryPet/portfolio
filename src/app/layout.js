import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Darya | Creative Developer</title>
        <meta
          name="description"
          content="I am a Fullstack Developer specializing in JavaScript, React, TypeScript, Node.js, MongoDB, Nest.js, GraphQL, CSS, Html, Three.js. I build scalable and modern web applications using technologies like Next.js, Redux, Supabase, and Vite. Let’s collaborate to bring your vision to life!"
        />
        <meta property="og:title" content="Darya | Creative Developer" />
        <meta
          property="og:description"
          content="I am a Fullstack Developer specializing in JavaScript, React, TypeScript, Node.js, MongoDB, Nest.js, GraphQL, CSS, Html, Three.js. I build scalable and modern web applications using technologies like Next.js, Redux, Supabase, and Vite. Let’s collaborate to bring your vision to life!"
        />
        <meta property="og:image" content="/assets/image-meta.webp" />
        <meta property="og:url" content="https://daryapetrenko.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://daryapetrenko.vercel.app" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
