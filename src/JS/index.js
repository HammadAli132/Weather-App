import '../style.css';
import getHeader from './header';
import getMain from './main';

function start() {
    const body = document.body;

    const header = getHeader();
    body.appendChild(header);

    const main = getMain();
    body.appendChild(main);
}

start();