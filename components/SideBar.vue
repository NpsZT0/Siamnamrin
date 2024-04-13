<script setup lang="ts">
defineProps<{ navigation: any }>()

const route = useRoute()
</script>

<template>
    <div class="z-[2] drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="min-h-full p-4 menu w-80 bg-neutral/80 backdrop-blur">
            <!-- Sidebar content here -->
            <li v-for="item in navigation">
                <div v-if="!item.children">
                    <NuxtLink v-if="route.fullPath === item.href" :key="item.name" :to="item.href"
                        class="text-sm leading-6 text-primary">
                        {{ item.name }}
                    </NuxtLink>
                    <NuxtLink v-if="route.fullPath !== item.href" :key="item.name" :to="item.href"
                        class="text-sm leading-6 text-primary-content">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div v-else class="block">
                    <NuxtLink :key="item.name" :to="item.href" class="text-primary-content text-pretty">
                        {{ item.name }}
                    </NuxtLink>
                    <ul class="p-0 space-y-0 leading-5">
                        <li v-for="child in item.children">
                            <NuxtLink v-if="route.fullPath === child.href" :key="child.name" :to="child.href"
                                class="text-primary text-pretty">
                                {{ child.name }}
                            </NuxtLink>
                            <NuxtLink v-if="route.fullPath !== child.href" :key="child.name" :to="child.href"
                                class="text-primary-content text-pretty">
                                {{ child.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>