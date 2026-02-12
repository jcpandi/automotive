import './globals.css';

export const metadata = {
  title: 'Autoglide - Premium Automotive Experience',
  description: 'Discover luxury vehicles from world-renowned brands. Expert service, premium vehicles, and exceptional automotive experiences.',
  keywords: 'luxury cars, premium vehicles, automotive, car dealership, sports cars, electric vehicles',
  authors: [{ name: 'Autoglide' }],
  openGraph: {
    title: 'Autoglide - Premium Automotive Experience',
    description: 'Discover luxury vehicles from world-renowned brands.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-dark-300 text-gray-300 antialiased">
        {children}
      </body>
    </html>
  );
}
