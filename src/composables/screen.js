import { onMounted, onUnmounted, ref } from "vue";

export function useScreen() {
    const isMobile = ref(false);
    const browserWidth = ref(window.innerWidth);
    const deviceWidth = ref(screen.width);

    const onBrowserResize = () => {
        isMobile.value = window.innerWidth < 768;
        browserWidth.value = window.innerWidth;
        deviceWidth.value = screen.width;
    };

    onMounted(() => {
        window.addEventListener('resize', onBrowserResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', onBrowserResize);
    })

    return { isMobile, browserWidth, deviceWidth };
}