console.log("Welcome to Spotify");
//Initialize variable
let songIndex = 0;
let masterText = document.getElementById('masterText');
let audioElement = new Audio("Assets-Spotify/chinnu chinnu.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "chinnu chinnu",filepath:"Assets-Spotify/chinnu chinnu.mp3",coverpath:"Assets-Spotify/chinnu chinnu.jpeg"},
    {songName: "Suttamla Soosi",filepath:"Assets-Spotify/Suttamla Soosi.mp3",coverpath:"Assets-Spotify/Suttamla Soosi.jpeg"},
    {songName: "All Most Padipoyinde Pilla",filepath:"Assets-Spotify/All Most Padipoyinde Pilla.mp3",coverpath:"Assets-Spotify/All Most Padipoyinde Pilla.jpeg"},
    {songName: "Samajavaragamana",filepath:"Assets-Spotify/Samajavaragamana.mp3",coverpath:"Assets-Spotify/Samajavaragamana.jpg"},
    {songName: "Ammayi",filepath:"Assets-Spotify/Ammayi.mp3",coverpath:"Assets-Spotify/Ammayi.jpg"},
    {songName: "Aradhya",filepath:"Assets-Spotify/Aradhya.mp3",coverpath:"Assets-Spotify/Aradhya.jpeg"},
    {songName: "Boss Party",filepath:"Assets-Spotify/Boss Party.mp3",coverpath:"Assets-Spotify/Boss Party.jpeg"},
    {songName: "O Rendu Prema Meghaalila",filepath:"Assets-Spotify/O Rendu Prema Meghaalila.mp3",coverpath:"Assets-Spotify/O Rendu Prema Meghaalila.jpg"},
    {songName: "Proud Se Single",filepath:"Assets-Spotify/Proud Se Single.mp3",coverpath:"Assets-Spotify/Proud Se Single.jpeg"},
];


//Handling Play,Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

//Progess Bar Time Update
audioElement.addEventListener('timeupdate',()=>
{
    let progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    audioElement.value = myProgressBar.value;
});

//traversing through all songs
songItems.forEach((element,i)=>
{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

let songItemPlay = Array.from(document.getElementsByClassName('SongItemPlay'));

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

songItemPlay.forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        if(e.target.classList.contains('fa-pause-circle'))
        {
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity = 0;
            audioElement.currentTime = myProgressBar.value;
        }  
        else
        {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            let srci = songs[songIndex].filepath;
            audioElement.src = srci;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterText.innerText = songs[songIndex].songName;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
    });

});

let previous = document.getElementById('previous');

previous.addEventListener('click',()=>{
    if(songIndex <= 0) songIndex = 7;
    else songIndex --;

    let srci = songs[songIndex].filepath;
    audioElement.src = srci;
    audioElement.currentTime = 0;
    audioElement.play();
    masterText.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

let next = document.getElementById('next');

next.addEventListener('click',()=>{
    if(songIndex >= 7) songIndex = 0;
    else songIndex += 1;

    let srci = songs[songIndex].filepath;
    audioElement.src = srci;
    audioElement.currentTime = 0;
    audioElement.play();
    masterText.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})