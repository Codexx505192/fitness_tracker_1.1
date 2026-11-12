'use client'

import { useState, useEffect } from 'react'
import Headerr from '@/components/Header/Header'
import style from './vide.module.css'

export default function Page(){

const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

    return(
        <>
        <section>
            <div className={style.container}>
               <Headerr/>

               <div className={style.vodeo_bi}>
                 
                 {/* <div className={style.video_itm}>
                   <iframe 
                   
                    src="https://www.youtube.com/embed/_4CuCqhbRDQ?si=LKdHKZ2U4YQi7lgg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; picture-in-picture; 
                    web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    >

                    </iframe>
                 </div> */}

                 <div className={style.vodeo_bi}>
      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/_4CuCqhbRDQ?si=LKdHKZ2U4YQi7lgg" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>

      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/17RkHels7eA?si=TlH4nQ8MZFfg63Wj" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>

      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/GNyg0_HMsjE?si=fzFgk33D5LucCSSl" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>

      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/YrB6TG84d-E?si=McAHugKKZhaOkmbB" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>

      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/o6B6cWNV6Mg?si=1fdGPMDdUwey39A7" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>

      <div className={style.video_itm}>
        {!isOnline ? (
          /* Блок предупреждения об отсутствии интернета */
          <div className={style.offline_warning}>
            <span className={style.offline_icon}>⚠️</span>
            <p className={style.offline_title}>Нет подключения к интернету</p>
            <p className={style.offline_text}>Проверьте соединение с сетью, чтобы посмотреть видео.</p>
          </div>
        ) : (
          /* Сам iframe, если интернет есть */
          <iframe 
            src="https://www.youtube.com/embed/dnRnVqWgnQA?si=01ZysQN9NGjDG4ee" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        )}
      </div>
    </div>
               </div>
            </div>
        </section>
        </>
    )
}


