<script setup lang="ts">
defineProps<{ navigation: any }>()

const route = useRoute()
</script>

<template>
    <header class="sticky top-0 z-[1] -mb-px backdrop-blur border-b border-gray-200 lg:border-0 lg:mb-0 navbar ">
        <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </label>
        </div>
        <div class="flex-1 px-2 mx-2">
            <a href="/">
                <img src="/logo01.png" alt="logo" class="w-[6rem]" />
            </a>
        </div>
        <div class="flex-none hidden lg:block z-[1]">
            <!-- Navbar menu content here -->
            <ul v-for="item in navigation" class="px-1 menu menu-horizontal">
                <li>
                    <!-- v-if="!item.children" -->
                    <div v-if="route.fullPath === item.href">
                        <NuxtLink :key="item.name" :to=item.href class="text-base text-primary">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                    <div v-else>
                        <NuxtLink :key="item.name" :to=item.href class="text-base text-black">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </li>
                <!-- <Dropdown /> -->
                <!-- <li v-else>
                    <details>
                        <summary v-if="route.fullPath === item.href" class="text-primary">{{ item.name }}</summary>
                        <summary v-else class="text-primary-content">{{ item.name }}</summary>
                        <ul class="p-2">
                            <li v-for="child in item.children">
                                <div v-if="route.fullPath === child.href">
                                    <NuxtLink :key="child.name" :to=child.href class="w-[300px] font-medium text-primary">
                                        {{ child.name }}
                                    </NuxtLink>
                                </div>
                                <div v-else>
                                    <NuxtLink :key="child.name" :to=child.href class="w-[300px]">
                                        {{ child.name }}
                                    </NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </details>
                </li> -->
            </ul>
        </div>
    </header>
    <!-- <header
        class="sticky top-0 z-50 -mb-px border-b border-gray-800 bg-background/75 backdrop-blur dark:border-gray-800 lg:mb-0 lg:border-0">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <div data-headlessui-state="" class="relative inline-flex text-left rtl:text-right">
                    <div id="headlessui-menu-button-c5aoANGnsI:0" aria-haspopup="menu" aria-expanded="false"
                        data-headlessui-state="" class="inline-flex w-full" role="button"
                        data-n-ids="{&quot;c5aoANGnsI:0&quot;:&quot;c5aoANGnsI:0&quot;}">
                        <svg class="block w-auto h-6 text-black dark:text-white" width="800" height="200"
                            viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M377 200C379.16 200 381 198.209 381 196V103C381 103 386 112 395 127L434 194C435.785 197.74 439.744 200 443 200H470V50H443C441.202 50 439 51.4941 439 54V148L421 116L385 55C383.248 51.8912 379.479 50 376 50H350V200H377Z"
                                fill="currentColor"></path>
                            <path
                                d="M726 92H739C742.314 92 745 89.3137 745 86V60H773V92H800V116H773V159C773 169.5 778.057 174 787 174H800V200H783C759.948 200 745 185.071 745 160V116H726V92Z"
                                fill="currentColor"></path>
                            <path
                                d="M591 92V154C591 168.004 585.742 179.809 578 188C570.258 196.191 559.566 200 545 200C530.434 200 518.742 196.191 511 188C503.389 179.809 498 168.004 498 154V92H514C517.412 92 520.769 92.622 523 95C525.231 97.2459 526 98.5652 526 102V154C526 162.059 526.457 167.037 530 171C533.543 174.831 537.914 176 545 176C552.217 176 555.457 174.831 559 171C562.543 167.037 563 162.059 563 154V102C563 98.5652 563.769 96.378 566 94C567.96 91.9107 570.028 91.9599 573 92C573.411 92.0055 574.586 92 575 92H591Z"
                                fill="currentColor"></path>
                            <path
                                d="M676 144L710 92H684C680.723 92 677.812 93.1758 676 96L660 120L645 97C643.188 94.1758 639.277 92 636 92H611L645 143L608 200H634C637.25 200 640.182 196.787 642 194L660 167L679 195C680.818 197.787 683.75 200 687 200H713L676 144Z"
                                fill="currentColor"></path>
                            <path
                                d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z"
                                fill="#00DC82"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <ul class="items-center hidden gap-x-8 lg:flex">
                <li class="relative">
                    <div class="relative" data-headlessui-state="">
                        <div class="inline-flex w-full" role="button"
                            data-n-ids="{&quot;fTFiYtcD5y:0&quot;:&quot;fTFiYtcD5y:1&quot;,&quot;fTFiYtcD5y:1&quot;:&quot;fTFiYtcD5y:2&quot;}"
                            id="headlessui-popover-button-fTFiYtcD5y:1" aria-expanded="false" data-headlessui-state="">
                            <a class="flex items-center gap-1 font-semibold text-sm/6 text-primary"
                                href="/docs">Docs<span
                                    class="flex-shrink-0 w-4 h-4 transition-transform duration-200 transform i-ph-caret-down"></span></a>
                        </div>
                    </div>
                    <div
                        style="position:fixed;top:1;left:1;width:1;height:0;padding:0;margin:-1;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none;">
                    </div>
                </li>
                <li class="relative">
                    <div class="relative" data-headlessui-state="">
                        <div class="inline-flex w-full" role="button"
                            data-n-ids="{&quot;fTFiYtcD5y:0&quot;:&quot;fTFiYtcD5y:3&quot;,&quot;fTFiYtcD5y:1&quot;:&quot;fTFiYtcD5y:4&quot;}"
                            id="headlessui-popover-button-fTFiYtcD5y:3" aria-expanded="false" data-headlessui-state="">
                            <a class="flex items-center gap-1 font-semibold text-sm/6 hover:text-primary"
                                href="/modules">Integrations<span
                                    class="flex-shrink-0 w-4 h-4 transition-transform duration-200 transform i-ph-caret-down"></span></a>
                        </div>
                    </div>
                    <div
                        style="position:fixed;top:1;left:1;width:1;height:0;padding:0;margin:-1;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none;">
                    </div>
                </li>
                <li class="relative">
                    <div class="relative" data-headlessui-state="">
                        <div class="inline-flex w-full" role="button"
                            data-n-ids="{&quot;fTFiYtcD5y:0&quot;:&quot;fTFiYtcD5y:5&quot;,&quot;fTFiYtcD5y:1&quot;:&quot;fTFiYtcD5y:6&quot;}"
                            id="headlessui-popover-button-fTFiYtcD5y:5" aria-expanded="false" data-headlessui-state="">
                            <a class="flex items-center gap-1 font-semibold text-sm/6 hover:text-primary"
                                href="/templates">Resources<span
                                    class="flex-shrink-0 w-4 h-4 transition-transform duration-200 transform i-ph-caret-down"></span></a>
                        </div>
                    </div>
                    <div
                        style="position:fixed;top:1;left:1;width:1;height:0;padding:0;margin:-1;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none;">
                    </div>
                </li>
                <li class="relative">
                    <a class="flex items-center gap-1 font-semibold text-sm/6 hover:text-primary"
                        href="/showcase">Showcase</a>
                </li>
                <li class="relative">
                    <div class="relative" data-headlessui-state="">
                        <div class="inline-flex w-full" role="button"
                            data-n-ids="{&quot;fTFiYtcD5y:0&quot;:&quot;fTFiYtcD5y:7&quot;,&quot;fTFiYtcD5y:1&quot;:&quot;fTFiYtcD5y:8&quot;}"
                            id="headlessui-popover-button-fTFiYtcD5y:7" aria-expanded="false" data-headlessui-state="">
                            <a class="flex items-center gap-1 font-semibold text-sm/6 hover:text-primary"
                                href="/enterprise">Enterprise<span
                                    class="flex-shrink-0 w-4 h-4 transition-transform duration-200 transform i-ph-caret-down"></span></a>
                        </div>
                    </div>
                    <div
                        style="position:fixed;top:1;left:1;width:1;height:0;padding:0;margin:-1;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none;">
                    </div>
                </li>
                <li class="relative">
                    <a class="flex items-center gap-1 font-semibold text-sm/6 hover:text-primary" href="/blog">Blog</a>
                </li>
            </ul>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <div class="relative inline-flex">
                    <button type="button"
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        aria-label="Search">
                        <span class="flex-shrink-0 w-5 h-5 i-ph-magnifying-glass-duotone" aria-hidden="true"></span>
                    </button>
                </div>
                <div class="relative inline-flex">
                    <button type="button"
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        aria-label="Switch to light mode">
                        <span class="flex-shrink-0 w-5 h-5 i-ph-moon-duotone" aria-hidden="true"></span>
                    </button>
                </div>
                <div class="relative inline-flex">
                    <a class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        href="https://github.com/nuxt/nuxt" rel="noopener noreferrer" target="_blank">
                        <span class="flex-shrink-0 w-5 h-5 i-simple-icons-github" aria-hidden="true"></span>
                        <span class="">51.7K</span>
                    </a>
                </div>
                <button type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
                    aria-label="Open Menu">
                    <span class="flex-shrink-0 w-5 h-5 i-ph-list" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </header> -->
</template>