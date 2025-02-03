import Navbar from './components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row min-h-screen">
          <main className="flex-1 p-4 md:p-8 md:ml-64">{children}</main>
          <Navbar />
        </div>
      </body>
    </html>
  );
}