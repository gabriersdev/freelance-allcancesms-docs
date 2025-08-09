import DefaultTheme from 'vitepress/theme'
import {onMounted, watch} from "vue";
import {useRouter} from "vitepress";
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    const defaultSetup = DefaultTheme.setup ? DefaultTheme.setup() : undefined;
    const router = useRouter();

    const setImg = (button, img) => {
      if (!button.getAttribute('title').includes('dark')) img.setAttribute('src', 'allcance-logo-white.png');
      else img.setAttribute('src', 'allcance-logo-black.png');
    }

    const updateTexts = () => {
      // Traduz textos
      Array.from(document.querySelectorAll("body *")).filter(el => [
        "note", "important", "tip", "previous page", "next page", "caution", "search"
      ].includes(el.textContent.toLowerCase())).forEach(el => {
        switch (el.textContent.toLowerCase()) {
          case 'note':
            el.textContent = 'NOTA';
            break;
          case 'important':
            el.textContent = 'IMPORTANTE';
            break;
          case 'tip':
            el.textContent = 'SAIBA MAIS';
            break;
          case 'caution':
            el.textContent = 'ATENÇÃO';
            break;
          case 'previous page':
            el.textContent = 'Página anterior';
            break;
          case 'next page':
            el.textContent = 'Próxima página';
            break;
          case 'search':
            el.innerHTML = 'Pesquisar&nbsp;&nbsp;';
            break;
        }
      })
    }

    onMounted(() => {
      const img = document.querySelector('.VPNavBarTitle img:last-child');
      setTimeout(() => {
        setImg(document.querySelector('.VPSwitch.VPSwitchAppearance'), img)
      }, 1000);

      document.addEventListener("click", (event) => {
        const button = event.target.closest('.VPSwitch.VPSwitchAppearance');
        if (button) {
          button.addEventListener('click', () => {
            setImg(button, img)
          })
        }
      });

      updateTexts();
    });

    router.onAfterRouteChanged = (() => {
      updateTexts();
    })

    watch(() => {
      updateTexts()
    });

    return defaultSetup;
  },
};
