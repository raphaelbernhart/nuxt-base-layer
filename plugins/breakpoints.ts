import { useBreakpoints } from '@vueuse/core';
import { theme } from '#tailwind-config';

export default defineNuxtPlugin(() => {
    const screens = theme?.screens;

    if (typeof screens === 'undefined') {
        return;
    }

    const tailwindBreakpoints = Object.fromEntries(
        Object.entries(screens).map((screen: Array<any>) => [
            screen[0],
            parseInt(screen[1].toString().replace('px', ''), 10),
        ]),
    );

    return {
        provide: {
            breakpoints: {
                ...useBreakpoints(tailwindBreakpoints),
                values: tailwindBreakpoints,
            },
        },
    };
});
