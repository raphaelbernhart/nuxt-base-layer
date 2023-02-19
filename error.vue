<template>
    <div class="flex items-center justify-center w-full h-screen">
        <div
            class="container flex flex-col items-center justify-center gap-y-10"
        >
            <div class="text-center">
                <h2 class="font-light text-8xl">{{ error.statusCode }}</h2>
                <p class="mt-3 text-xl">
                    {{ error.message }}
                </p>
            </div>
            <ButtonComponent label="Back to home" @click="redirectToSafePage" />
        </div>
    </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
    methods: {
        redirectToSafePage() {
            clearError({ redirect: '/' });
        },
    },
});
</script>
