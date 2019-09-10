(function(){
    document.getElementById('capture').addEventListener('click', takeSnapshot);
})();

function takeSnapshot(){
    console.info('...Start recording...');

    navigator.mediaDevices.getUserMedia(
        {video:true, audio:false}
    ).then((stream) => {
        let video = document.getElementById('player');
        video.srcObject = stream;
        video.play();
    }).catch((err) =>{
        console.error(err);
    })
}