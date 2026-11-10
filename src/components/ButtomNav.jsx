// components/BottomNav.jsx
'use client';
import Link from 'next/link';
import { Home, Dumbbell, BarChart2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Сегодня', icon: Home },
    { href: '/workouts', label: 'Программы', icon: Dumbbell },
    { href: '/stats', label: 'Прогресс', icon: BarChart2 },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className={`nav-item ${isActive ? 'active' : ''}`}>
            <Icon size={10} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}