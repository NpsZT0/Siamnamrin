<template>
    <div class="mt-8">
        <!-- Section 1 -->
        <section id="สแลทพ่อพันธุ์" class="section" :class="classScrollH2">
            <h2 class="text-2xl font-bold sm:text-3xl text-start">
                <Hashtag name="สแลทพ่อพันธุ์" href="#สแลทพ่อพันธุ์" />
            </h2>
            <p class="text-gray-500 text-start">
                แสลทปูพื้นสำเร็จรูป ของ SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ หลายขนาด
                เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
        </section>

        <!-- Images -->
        <div class="grid grid-cols-6 grid-rows-1 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-2">
            <div class="col-span-4 col-start-1 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/3/2.jpg" alt="banner5" />
            </div>
            <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/3/3.jpg" alt="banner3" />
            </div>
        </div>

        <!-- Section 2 -->
        <section id="ตัวอย่าง-สแลทพ่อพันธุ์บางขนาดของ-SNR" class="section" :class="classScrollH4">
            <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตัวอย่าง สแลทพ่อพันธุ์บางขนาดของ SNR"
                    href="#ตัวอย่าง-สแลทพ่อพันธุ์บางขนาดของ-SNR" />
            </h4>
            <div class="mt-2 space-y-3">
                <ul v-for="(blueprint, index) in blueprintsProd3" class="leading-5 ">
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
        <section id="ตาราง-ขนาดสแลทพ่อพันธ์ุบางขนาดของ-SNR" class="section" :class="classScrollH4">
            <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตาราง ขนาดสแลทพ่อพันธ์ุบางขนาดของ SNR"
                    href="#ตาราง-ขนาดสแลทพ่อพันธ์ุบางขนาดของ-SNR" />
            </h4>
            <div class="text-2xl text-red-600">
                อันนี้ตารางผิด เป็นตารางเดียวกับแผ่นสแลทปูน
            </div>
            <div class="mt-2 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr class="text-sm">
                            <th></th>
                            <th>ขนาด <strong class="text-gray-600">แผ่นสแลทปูน</strong> SNR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in detailsProduct3" :key="index">
                            <th>{{ index + 1 }}</th>

                            <td>
                                <div class="flex space-x-2">
                                    <div class="flex space-x-2 text-nowrap">
                                        <div v-if="item.uditch_1.size != '-'">
                                            {{ item.uditch_1.size }} {{ item.uditch_1.unit }}.
                                        </div>
                                        <div v-else>{{ item.uditch_1.size }}</div>
                                    </div>
                                    <div v-if="item.uditch_1.thickness" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_1.thickness" class=" text-nowrap">
                                        ({{ item.uditch_1.thickness }})
                                    </div>
                                    <div v-if="item.uditch_1.details" class="text-gray-200">
                                        |
                                    </div>
                                    <div v-if="item.uditch_1.details" class=" text-nowrap">
                                        ({{ item.uditch_1.details }})
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
defineProps<{
    classScrollH2: String,
    classScrollH4: String,
    blueprintsProd3: Array,
    detailsProduct3: Array,
}>()
</script>