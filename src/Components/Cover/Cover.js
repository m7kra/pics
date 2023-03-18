import gaspar from '../../images/gaspar.jpg';
import './Cover.css';

export default function Cover () {

    return (
        <div className='cover' style={{'--bg-image': 'url("'+gaspar+'")'}}>
            <h1>Pics</h1>
            <p>Some of my favorite shots</p>
        </div>
    )
}