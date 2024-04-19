<template>
    <button ref="scrollToTopButton" @click="scrollToTop" title="Scroll to top"
        class="fixed p-2 text-center rounded-full bottom-4 right-4 backdrop-blur bg-primary/75 z-[2]"
        :style="{ display: displayStyle, transition:transitionStyle, opacity: opacityStyle }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 text-gray-200 lg:w-8 lg:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
    </button>
</template>

<script setup lang="ts">
const displayStyle = ref('none');
const transitionStyle = ref('opacity 0.3s ease 0s');
const opacityStyle = ref('0');

const handleScroll = () => {
    if (window.pageYOffset > 100) {
        displayStyle.value = 'block';
        opacityStyle.value = '1';
    } else {
        opacityStyle.value = '0';
        setTimeout(() => {
            displayStyle.value = 'none ';
        }, 500);
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Listen for scroll event on mount
onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
})

// Remove scroll event listener on component destroy
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>
