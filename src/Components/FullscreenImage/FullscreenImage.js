import './FullscreenImage.css'

export default function FullscreenImage({src, unsetFullscreen, active}) {
    const backgroundImage = 'url("'+src+'")';
    return (
        <div
            className={'fullscreen-image' + (active? ' active' : '')}
            style={{
                '--bg-image': backgroundImage
            }}
            onClick={unsetFullscreen}
        ></div>
    );
}