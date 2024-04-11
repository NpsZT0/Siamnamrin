<script setup lang="ts">
defineProps<{ navigation: any }>()
</script>

<template>
    <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="min-h-full p-4 menu w-80 bg-neutral">
            <!-- Sidebar content here -->
            <li v-for="item in navigation">
                <a :key="item.name" :href="item.href" class="text-sm leading-6 text-primary-content">{{
                item.name }}
                </a>
            </li>
        </ul>
    </div>
</template>