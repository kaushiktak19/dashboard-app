'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiHome, FiPieChart, FiUser, FiSettings } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: FiHome },
    { href: '/analytics', label: 'Analytics', icon: FiPieChart },
    { href: '/profile', label: 'Profile', icon: FiUser },
    { href: '/settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <>
      {/* Sidebar for desktop */}
      <div className="hidden md:block w-64 bg-blue-600 text-white min-h-screen p-4 fixed">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 ${pathname === item.href ? 'bg-blue-700' : ''}`}
            >
              <item.icon size={20} /> {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-blue-600 text-white flex justify-around items-center py-2 shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-sm ${pathname === item.href ? 'text-white' : 'text-blue-200'}`}
          >
            <item.icon size={24} />
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
