import Link from "next/link";
import { useState } from "react";


export default function Headerr(){
const [openModal, setOpenModal] = useState(false)


    return(
        <header className="header_1">
            <Link href="/" className="txt_1">Fitnes Trecer</Link>

            <div className="left_header">
            <ul className="lst_1">
                <li>
                    <Link href="/" className="lnk_1">
                    Home
                    </Link>
                </li>

                <li>
                    <Link href="/workouts" className="lnk_1">
                    Workouts
                    </Link>
                </li>

                <li>
                    <Link href="/stats" className="lnk_1">
                    Statistics
                    </Link>
                </li>
            </ul>

              <div className="header_menu">
                <ul className={`header_list ${openModal ? 'active': ""}`}>
                    <li>
                     <Link href="/" className="itm_menu">
                     Home
                     </Link>
                    </li>

                    <li>
                    <Link href="/workouts" className="itm_menu">
                     Workouts
                     </Link>
                    </li>

                    <li>
                    <Link href="/stats" className="itm_menu">
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