import '../style.css';
import getHeader from './header';

function start() {
    const body = document.body;

    const header = getHeader();
    body.appendChild(header);
}

start();