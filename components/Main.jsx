import Image from 'next/image'
import styles from '../styles.module.css'


const Main = () =>  (
            <main className={styles.main} >
                <div>
                    <Image
                    src = '/img.png'
                    alt = 'Hero'
                    width = {450}
                    height ={500}
                   
                    />
                </div>

                <div  className={styles.HeroText} >
                    <h1>Simple time tracking. <br /> Powerful reporting.</h1>

                    <p>Turn your team on to productivity with Gravity the time tracker.</p>

                    <button>Request early access</button>
                   
                </div>
            </main>)

export default Main