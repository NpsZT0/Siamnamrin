<script setup lang="ts">
defineProps<{ navigation: any }>()

const route = useRoute()
</script>

<template>
    <div class="z-[1] drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="min-h-full p-4 menu w-80 bg-neutral/80 backdrop-blur">
            <!-- Sidebar content here -->
            <li v-for="item in navigation">
                <div v-if="route.path === item.href">
                    <NuxtLink :key="item.name" :to="item.href"
                        class="text-sm leading-6 text-primary">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div v-else>
                    <NuxtLink :key="item.name" :to="item.href"
                        class="text-sm leading-6 text-primary-content">
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>