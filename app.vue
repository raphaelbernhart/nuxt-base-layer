<template>
    <NuxtLayout />
</template>

<script lang="ts">
export default defineNuxtComponent({
    head() {
        return {
            bodyAttrs: {
                class: 'max-w-[100vw] overflow-x-hidden',
            },
        };
    },
});
</script>
