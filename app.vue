<script setup lang="ts">
import router from './static/json/router.json'
const navigation = router;
</script>

<template>
  <div class="container font-noto bg-delft_blue-900 scroll-smooth">
    <div class="absolute inset-x-0 top-0 z-[1] w-full h-full">
      <div class="drawer">

        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col drawer-content bg-delft_blue-900">
          <!-- Navbar -->
          <Navbar v-bind:navigation="navigation" />
          <!-- Page content here -->
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
          <!-- Footer -->
          <Footer />
        </div>

        <!-- Sidebar -->
        <SideBar v-bind:navigation="navigation" />
      </div>
    </div>
  </div>
</template>
