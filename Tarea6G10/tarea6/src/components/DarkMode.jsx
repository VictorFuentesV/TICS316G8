import '../css/Home.css'
import { useRef } from 'react'

//no funciona todavia, pero este componente sería utilizado para agregar la clase darkmode al componente indicado con ref

export function DarkMode() {
    const ref = useRef();

    const handleClick = () => {
      const nav = ref.current;
      nav.classList.toggle('darkmode');
    };

    return(
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
        </button>
    )
}