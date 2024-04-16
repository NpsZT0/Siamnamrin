<script setup lang="ts">
defineProps<{
    name: String,
    href: String,
}>();
</script>

<template>
    <a class="relative border-none group lg:-ml-2 lg:pl-2" :href="href">
        <span
            class="absolute items-center hidden -ml-8 border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">&ZeroWidthSpace;
            <span
                class="flex items-center justify-center w-6 h-6 rounded-md shadow-sm text-slate-400 ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10">
                <svg width="12" height="12" fill="none" aria-hidden="true">
                    <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round">
                    </path>
                </svg>
            </span>
        </span>{{ name }}
    </a>
</template>