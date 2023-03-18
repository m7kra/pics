import './Picture.css';

export default function Picture({src, setFullscreen, orientation}) {

    const backgroundImage = 'url("'+src+'")';
    return (
        <div className={'picture ' + orientation + (orientation == 'landscape'? ' col-md-6 col-sm-10 col-12' : ' col-md-4 col-sm-6 col-10')}>
            <div
                style={{
                    '--bg-image': backgroundImage
                }}
                onClick={() => setFullscreen(src)}
            ></div>
        </div>
    )
}