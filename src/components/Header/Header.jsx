'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // 1. Импортируем хук

export default function Header() {
  const [openModal, setOpenModal] = useState(false)
  const pathname = usePathname() // 2. Получаем текущий путь (например, "/video")

  return (
    <header className="header_1">
      <Link href="/" className="txt_1">Fitnes Trecer</Link>

      <div className="left_header">
        <ul className="lst_1">
          {/* Десктопное меню */}
          <li>
            <Link 
              href="/" 
              className={`lnk_1 ${pathname === '/' ? 'active-link' : ''}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              href="/video" 
              className={`lnk_1 ${pathname === '/video' ? 'active-link' : ''}`}
            >
              Video
            </Link>
          </li>

          <li>
            <Link 
              href="/workouts" 
              className={`lnk_1 ${pathname === '/workouts' ? 'active-link' : ''}`}
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link 
              href="/stats" 
              className={`lnk_1 ${pathname === '/stats' ? 'active-link' : ''}`}
            >
              Statistics
            </Link>
          </li>
        </ul>

        <div className="header_menu">
          {/* Мобильное выпадающее меню */}
          <ul className={`header_list ${openModal ? 'active' : ''}`}>
            <li>
             <Link 
               href="/" 
               className={`itm_menu ${pathname === '/' ? 'active-link' : ''}`}
               onClick={() => setOpenModal(false)}
             >
               Home
             </Link>
            </li>

            <li>
              <Link 
                href="/workouts" 
                className={`itm_menu ${pathname === '/workouts' ? 'active-link' : ''}`}
                onClick={() => setOpenModal(false)}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link 
                href="/stats" 
                className={`itm_menu ${pathname === '/stats' ? 'active-link' : ''}`}
                onClick={() => setOpenModal(false)}
              >
                Stats
              </Link>
            </li>

            <li className="close" onClick={() => setOpenModal(false)}>
              Close
            </li>
          </ul>

          <div className="menu_b" onClick={() => setOpenModal(!openModal)}>
            <img src="./icons/menu.png" alt="menu" />
          </div>
        </div>
      </div>
    </header>
  )
}