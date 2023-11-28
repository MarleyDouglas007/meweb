import Image from 'next/image';
import styles from './styles.module.css';
import './globals.css';
import meweb from '../../public/MeWeeb.png';



export const metadata = {
  title: 'Me Weeb',
}

function Logo({ x, y }) {
  return (
    <Image src={meweb}   style={{left: x, top: y}} className={styles.logo}/>
  );
}

//PAREI AQUI
function ItemMenu ({x,y}){
  <p className={styles.itemMenu}>{nome}</p>
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.corpo}>
        <header>
          <Logo>

          </Logo>

        </header>

        <main>
          {children}
        </main>
      </body>

    </html>
  )
}
