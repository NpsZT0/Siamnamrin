<template>
    <div class="mt-8">
        <!-- Section 1 -->
        <section id="รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" class="section" :class="classScrollH2">
            <h2 class="text-2xl font-bold sm:text-3xl text-start">
                <Hashtag name="รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด" href="#รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" />
            </h2>
            <p class="text-gray-500 text-start">
                รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน
                สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด
                ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
            </p>
        </section>

        <!-- Images -->
        <div class="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-2">

            <div class="col-span-4 col-start-1 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/1/5.jpg" alt="banner5" />
            </div>
            <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/1/3.jpg" alt="banner3" />
            </div>

            <div class="col-span-3 col-start-1 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/1/6.jpg" alt="banner6" />
            </div>
            <div class="col-span-1 col-start-4 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/1/4.jpg" alt="banner4" />
            </div>
            <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/1/7.jpg" alt="banner7" />
            </div>
        </div>

        <!-- Section 2 -->
        <section id="ตัวอย่าง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-บริษัทสยามน้ำรินจำกัด" class="section"
            :class="classScrollH4">
            <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตัวอย่าง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ บริษัทสยามน้ำรินจำกัด"
                    href="#ตัวอย่าง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-บริษัทสยามน้ำรินจำกัด" />
            </h4>
            <div class="mt-2 space-y-3">
                <ul v-for="(blueprint, index) in blueprintsProd1" class="leading-5 ">
                    <li class="flex text-gray-500 w-fit h-fit">
                        <div v-if="typeof (blueprint.name) == 'object' || typeof (blueprint.href) == 'object'">
                            <NuxtLink :key="index" :to="blueprint.href[0]" target="_blank" class="hover:text-primary">
                                {{ blueprint.name[0] }}
                            </NuxtLink>&nbsp;|&nbsp;
                            <NuxtLink :key="index" :to="blueprint.href[1]" target="_blank" class="hover:text-primary">
                                {{ blueprint.name[1] }}
                            </NuxtLink>
                        </div>
                        <div v-else>
                            <NuxtLink :key="index" :to="blueprint.href" target="_blank" class="hover:text-primary">
                                {{ blueprint.name }}
                            </NuxtLink>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-2 h-2 min-w-2 min-h-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Section 3 -->
        <section id="ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" class="section" :class="classScrollH4">
            <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตาราง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ SNR (บางส่วน)"
                    href="#ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" />
            </h4>
            <div class="mt-2 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr class="text-sm">
                            <th></th>
                            <th>ขนาด <strong class="text-gray-600">รางน้ำคอนกรีต</strong> SNR</th>
                            <th>ขนาด <strong class="text-gray-600">ฝารางน้ำคอนกรีต</strong> SNR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in detailsProduct1" :key="index">
                            <th>{{ index + 1 }}</th>

                            <td>
                                <div class="flex space-x-2">
                                    <div class="flex space-x-2 text-nowrap">
                                        <div v-if="item.uditch_1.size != '-'">{{ item.uditch_1.size }} {{
            item.uditch_1.unit }}.
                                        </div>
                                        <div v-else>{{ item.uditch_1.size }}</div>
                                    </div>
                                    <div v-if="item.uditch_1.thickness" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_1.thickness" class=" text-nowrap">
                                        หนา
                                        {{ item.uditch_1.thickness }} {{ item.uditch_1.unit }}.
                                    </div>
                                    <div v-if="item.uditch_1.details" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_1.details" class=" text-nowrap">
                                        {{ item.uditch_1.details }}
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="flex space-x-2">
                                    <div class="flex space-x-2 text-nowrap">
                                        <div v-if="item.uditch_2.size != '-'">{{ item.uditch_2.size }} {{
            item.uditch_2.unit }}.
                                        </div>
                                        <div v-else>{{ item.uditch_2.size }}</div>
                                    </div>
                                    <div v-if="item.uditch_2.thickness" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_2.thickness" class=" text-nowrap">
                                        หนา
                                        {{ item.uditch_2.thickness }} {{ item.uditch_1.unit }}.
                                    </div>
                                    <div v-if="item.uditch_2.details" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_2.details" class=" text-nowrap">
                                        {{ item.uditch_2.details }}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
defineProps({
    classScrollH2: String,
    classScrollH4: String,
    blueprintsProd1: Array,
    detailsProduct1: Array
})
</script>