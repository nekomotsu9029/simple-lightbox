if(!(typeof variable !== 'undefined')){
let htmlModal = `
    <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    .lightbox {
      cursor: pointer;
    }
    .no_scroll {
      overflow-y: hidden !important;
      overflow-x: hidden !important;
    }
    #lightbox_nekomotsu {
        display: none;
        position: absolute;
        padding-bottom: 50px;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.822);
        z-index: 1000;
        width: 100vw !important;
        height: 100vh !important;
        overflow-y: scroll;
        overflow-x: hidden !important;
    }
    #lightbox_nekomotsu.active {
        display: flex;
    }
    #img_lightbox_nekomotsu, #video_lightbox_nekomotsu {
        margin-top: 50px;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        max-width: 95% !important;
        height: auto !important;
    }
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        #img_lightbox_nekomotsu {
            max-width: 60% !important;
        }
        #img_lightbox_nekomotsu.img_x {
            width: 80% !important;
            max-width: 80% !important;
        }
     }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        #img_lightbox_nekomotsu {
            max-width: 40% !important;
        }
        #img_lightbox_nekomotsu.img_x {
            width: 80% !important;
            max-width: 80% !important;
        }
     }
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888; 
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    </style>
    <div id="lightbox_nekomotsu" class="animate__animated">
        <img id="img_lightbox_nekomotsu" class="animate__animated" src="" />
    </div>
    
`;
document.querySelector('body').innerHTML += htmlModal;
}

document.querySelector('#lightbox_nekomotsu').addEventListener('click', function (ev) {
    ev.stopPropagation();
    document.querySelector('body').classList.remove('no_scroll');
    document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeIn')
    document.querySelector('#lightbox_nekomotsu').classList.add('animate__fadeOut')
    setTimeout(function () {
        document.querySelector('#lightbox_nekomotsu').classList.remove('active')
    }, 500)
})

document.querySelector('#img_lightbox_nekomotsu').addEventListener('click', function (ev) {
    ev.stopPropagation();
})

function lightbox(url) {
    document.querySelector('#lightbox_nekomotsu').innerHTML = `<img id="img_lightbox_nekomotsu" class="animate__animated" src="${url}" />`
    document.querySelector('body').classList.add('no_scroll');
    document.querySelector('#lightbox_nekomotsu').style.top = window.scrollY+'px';
    document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
    document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
    document.querySelector('#img_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')
    let ancho = document.querySelector('#img_lightbox_nekomotsu').width;
    let alto = document.querySelector('#img_lightbox_nekomotsu').height;
    if(ancho>alto){
        document.querySelector('#img_lightbox_nekomotsu').classList.add('img_x')
    }
    console.log('el ancho es: '+document.querySelector('#img_lightbox_nekomotsu').width)
}

document.querySelectorAll('img.lightbox').forEach(function (element) {
    element.addEventListener('click', function () {
        lightbox(element.src);
    })
});

function lightbox_video(url){
    document.querySelector('#lightbox_nekomotsu').innerHTML = `<video id="video_lightbox_nekomotsu" controls class="animate__animated">
    <source src="${url}" type="video/mp4">
</video>`
    document.querySelector('body').classList.add('no_scroll');
    document.querySelector('#lightbox_nekomotsu').style.top = window.scrollY+'px';
    document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
    document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
    document.querySelector('#video_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')

}