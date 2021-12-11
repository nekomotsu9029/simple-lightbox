if(!(typeof variable !== 'undefined')){
let htmlModal = `
    <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    .lightbox {
      cursor: pointer;
    }
    .d-none {
        display: none !important;
    }
    .no_scroll {
      overflow-y: hidden !important;
      overflow-x: hidden !important;
    }
    #lightbox_nekomotsu {
        display: none;
        position: fixed;
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
     ::-webkit-scrollbar:horizontal {
        height: 5px;
    }
    ::-webkit-scrollbar {
        width: 5px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: #888;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #555; 
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #f1f1f1;
      }
    #preview-album_lightbox_nekomotsu {
        position: fixed;
        width: 100%;
        height: 105px;
        background-color: rgba(0, 0, 0, 0.459);
        padding: 5px;
        bottom: 0px;
        left: 0px;
        display: flex;
        justify-content: left;
        overflow-x: scroll;
    }
    #preview-album_lightbox_nekomotsu > img {
        width: auto;
        height: 90px !important;
        margin-right: 5px;
        margin-left: 5px;
        border: 2px solid gray;
    }
    </style>
    <div id="lightbox_nekomotsu" class="animate__animated">
        <img id="img_lightbox_nekomotsu" class="animate__animated" src="" />
    </div>
    
`;
document.querySelector('body').innerHTML += htmlModal;
}

function lightbox(url, album) {
    if(!document.querySelector('#lightbox_nekomotsu').classList.contains('active')){
        document.querySelector('#lightbox_nekomotsu').innerHTML = `<img id="img_lightbox_nekomotsu" class="animate__animated" src="${url}" />`
        
        if(album){
            document.querySelector('#lightbox_nekomotsu').innerHTML += `<div id="preview-album_lightbox_nekomotsu"></div>`

            document.querySelectorAll('.lightbox-album').forEach(function(element){
                document.querySelector('#preview-album_lightbox_nekomotsu').innerHTML += `<img src="${element.src}" class="lightbox lightbox-album lightbox-preview" />`
            })

        }
        
        document.querySelector('body').classList.add('no_scroll');
        document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
        document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
        document.querySelector('#img_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')

        document.querySelectorAll('img').forEach(function(element){
            element.addEventListener('click', function (ev) {
                if(element.classList.contains('lightbox-preview')){
                    lightbox(element.src, element.classList.contains('lightbox-album'));
                }
                ev.stopPropagation();
            })
        })
    }else{
        document.querySelector('#img_lightbox_nekomotsu').src = url;
    }
    
    let ancho = document.querySelector('#img_lightbox_nekomotsu').width;
    let alto = document.querySelector('#img_lightbox_nekomotsu').height;
    
    if(ancho>alto){
        document.querySelector('#img_lightbox_nekomotsu').classList.add('img_x')
    }else{
        document.querySelector('#img_lightbox_nekomotsu').classList.remove('img_x')
    }
}

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

document.querySelector('#lightbox_nekomotsu').addEventListener('click', function (ev) {
    ev.stopPropagation();
    document.querySelector('body').classList.remove('no_scroll');
    document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeIn')
    document.querySelector('#lightbox_nekomotsu').classList.add('animate__fadeOut')
    setTimeout(function () {
        document.querySelector('#lightbox_nekomotsu').classList.remove('active')
    }, 500)
})

document.querySelectorAll('img.lightbox').forEach(function (element) {
    element.addEventListener('click', function () {
        lightbox(element.src, element.classList.contains('lightbox-album'));
    })
});