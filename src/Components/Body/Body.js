import Picture from '../Picture/Picture';
import FullscreenImage from '../FullscreenImage/FullscreenImage';
import { useState } from 'react';

import mikra from '../../images/mikra.JPG';
import mikra2 from '../../images/mikra2.JPG';
import mikra3 from '../../images/mikra3.JPG';
import mikra4 from '../../images/mikra4.JPG';
import mikra5 from '../../images/mikra5.JPG';
import mail from '../../images/mail.JPG';
import ascending from '../../images/ascending.JPG';
import namur from '../../images/namur.JPG';
import gaspar from '../../images/gaspar.jpg';
import cave from '../../images/cave.JPG';
import mountains from '../../images/mountains.jpg';
import psousa from '../../images/psousa.jpg';
import rainbow from '../../images/rainbow.JPG';
import flowers from '../../images/flowers.JPG';

export default function Body() {

    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [fullscreenActive, setFullscreenActive] = useState(false);

    function setFullscreen(src) {
        setFullscreenImage(src);
        setFullscreenActive(true);
    }
    function unsetFullscreen() {
        setFullscreenActive(false);
    }

    const rendered = pictures.map((picture, index) =>
        <Picture src={picture.src} key={index} setFullscreen={setFullscreen} orientation={picture.orientation} />
    );
    
    return (
        <>
            <div className='body'>
                <div className='spacer-200'/>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-11 col-12'>
                            <div className='row picture-container justify-content-center'>
                                {rendered}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FullscreenImage src={fullscreenImage} active={fullscreenActive} unsetFullscreen={unsetFullscreen} />
        </>
    )
}

const pictures = [
    {src: psousa, orientation: 'landscape'},
    {src: mikra2, orientation: 'landscape'},
    {src: mail, orientation: 'portrait'},
    {src: namur, orientation: 'portrait'},
    {src: ascending, orientation: 'portrait'},
    {src: gaspar, orientation: 'landscape'},
    {src: cave, orientation: 'landscape'},
    {src: mikra, orientation: 'landscape'},
    {src: mountains, orientation: 'landscape'},
    {src: mikra5, orientation: 'portrait'},
    {src: flowers, orientation: 'portrait'},
    {src: rainbow, orientation: 'landscape'},
    {src: mikra3, orientation: 'landscape'},
    {src: mikra4, orientation: 'landscape'}
];