<script setup lang="ts">
defineProps<{ navigation: any }>()

const route = useRoute()
console.log("route", route.fullPath)
</script>

<template>
    <div class="w-full navbar bg-neutral">
        <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current text-primary-content">
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
                <li v-if="!item.children">
                    <div v-if="route.fullPath === item.href">
                        <NuxtLink :key="item.name" :to=item.href class="text-primary">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                    <div v-else>
                        <NuxtLink :key="item.name" :to=item.href class="text-primary-content">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </li>
                <li v-else>
                    <!-- <Dropdown /> -->
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
                </li>
            </ul>
        </div>
    </div>
</template>