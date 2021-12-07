const htmlModal = `
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
    #img_lightbox_nekomotsu {
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
     }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        #img_lightbox_nekomotsu {
            max-width: 40% !important;
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

const _body = document.querySelector('body');
_body.innerHTML += htmlModal;
const _lightbox_nekomotsu = document.querySelector('#lightbox_nekomotsu');
const _img_lightbox_nekomotsu = document.querySelector('#img_lightbox_nekomotsu');

_lightbox_nekomotsu.addEventListener('click', function (ev) {
    ev.stopPropagation();
    _body.classList.remove('no_scroll');
    _lightbox_nekomotsu.classList.remove('animate__fadeIn')
    _lightbox_nekomotsu.classList.add('animate__fadeOut')
    setTimeout(function () {
        _lightbox_nekomotsu.classList.remove('active')
    }, 500)
})

_img_lightbox_nekomotsu.addEventListener('click', function (ev) {
    ev.stopPropagation();
})

function lightbox(url) {
    _body.classList.add('no_scroll');
    _img_lightbox_nekomotsu.src = url
    _lightbox_nekomotsu.style.top = window.scrollY+'px';
    _lightbox_nekomotsu.classList.remove('animate__fadeOut')
    _lightbox_nekomotsu.classList.add('active', 'animate__fadeIn')
    _img_lightbox_nekomotsu.classList.add('active', 'animate__fadeInDown')
}

document.querySelectorAll('img.lightbox').forEach(function (element) {
    element.addEventListener('click', function () {
        lightbox(element.src);
    })
});