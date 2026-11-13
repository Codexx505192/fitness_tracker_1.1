import Link from "next/link";


export default function NotPage(){
    return(
        <section>
            <div className='container_404'>
                <h1 className='error'>404 Not found</h1>
                <p className="txt_2">Запрашиваемая страница не существует.</p>
                <Link href="/" className="home_ar">Вернуться на главную</Link>
            </div>
        </section>
    )
}