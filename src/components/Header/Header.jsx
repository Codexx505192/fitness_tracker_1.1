'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../Header/header.module.css'

function isNewYearSeason(date = new Date()) {
  const month = date.getMonth() + 1 // 1..12
  const day = date.getDate() // 1..31

  // С 20 декабря по 10 января включительно
  const isLateDecember = month === 12 && day >= 20
  const isEarlyJanuary = month === 1 && day <= 10

  return isLateDecember || isEarlyJanuary
}


export default function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [isNewYear, setIsNewYear] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsNewYear(isNewYearSeason())
  }, [])
//   useEffect(() => {
//   // Проверка новогоднего периода (например, 31 декабря или 3 января)
//   setIsNewYear(isNewYearSeason(new Date('2026-12-31')))

//   // Проверка обычного дня (например, 24 ноября или 15 марта)
//   // setIsNewYear(isNewYearSeason(new Date('2026-11-24')))
// }, [])

  return (
    <header className="header_1">
      <Link
        href="/"
        className={`txt_1 ${isNewYear ? styles.logoNewYear : styles.logoClassic}`}
      >
        {isNewYear ? '🎄 Fitnes Trecer' : 'Fitnes Trecer'}
      </Link>

      <div className="left_header">
       <ul className="lst_1">
  <li className='lst_itm'>
    {isNewYear && (
      <div className="itm_1">
        <img src="/icons/itm_1.png" alt="" className="itm_1" />
      </div>
    )}
    <Link
      href="/"
      className={`lnk_1 ${pathname === '/' ? 'active-link' : ''}`}
    >
      Home
    </Link>
  </li>

  <li className='lst_itm'>
     {isNewYear && (
      <div className="itm_1">
        <img src="/icons/itm_2.png" alt="" className="itm_1" />
      </div>
    )}

    <Link
      href="/video"
      className={`lnk_1 ${pathname === '/video' ? 'active-link' : ''}`}
    >
      Video
    </Link>
  </li>

  <li className='lst_itm'>
    {isNewYear && (
      <div className="itm_1">
        <img src="/icons/itm_3.png" alt="" className="itm_1" />
      </div>
    )}

    <Link
      href="/workouts"
      className={`lnk_1 ${pathname === '/workouts' ? 'active-link' : ''}`}
    >
      Workouts
    </Link>
  </li>

  <li className='lst_itm'> 
    {isNewYear && (
      <div className="itm_1">
        <img src="/icons/itm_4.png" alt="" className="itm_1" />
      </div>
    )}

    <Link
      href="/stats"
      className={`lnk_1 ${pathname === '/stats' ? 'active-link' : ''}`}
    >
      Statistics
    </Link>
  </li>
</ul>

        <div className="header_menu">
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
                href="/video"
                className={`itm_menu ${pathname === '/video' ? 'active-link' : ''}`}
                onClick={() => setOpenModal(false)}
              >
                Video
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
            {/* <img src="/icons/menu.png" alt="menu" />/ */}
            <img src="/icons/menu_white.png" alt="menu" />
          </div>
        </div>
      </div>
    </header>
  )
}