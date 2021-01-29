import Image from 'next/image'
import styles from '../styles.module.css'


const NavBar = () =>  (
            <nav className={styles.nav} >
                <div>
                    <Image
                    src = '/Logo.png'
                    alt = 'LOGO'
                    width = {100}
                    height ={30}
                   
                   
                    />
                </div>

                <div>
                    <ul className = {styles.links}>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Why Gravity</p>
                        <p>Sign In</p>
                        
                    </ul>
                    <button className = {styles.navBtn}>
                    <Image
                    src = '/dots.png'
                    alt = 'Button'
                    width = {23}
                    height ={23}
                   
                    />
                        <p>
                        Menu </p>                     
                     </button>
                </div>
            </nav>)

export default NavBar