import React,{useState} from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ModalVideo from 'react-modal-video';


const Playvideo = ({videoId}) => {
    const [isOpen, setOpen] = useState(false)

    const loading = true;
    const goDown = {zIndex: 0, marginLeft: '22px'}
    return (
        <>
            <div className="play-video">
                <PuffLoader color={'#106FDE'} loading={loading} css={goDown} size={150} />
                    <button onClick={()=> setOpen(true)}>
                    <PlayCircleOutlineIcon style={{ color: '#106FDE', fontSize: 80 }} />
                    </button>
                    
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={`${videoId}`} onClose={() => setOpen(false)} />
        </>
    )
}

export default Playvideo
