<template>
    <div class="mt-8">
        <!-- Section 1 -->
        <section id="แผ่นสแลทปูพื้นคอกสำเร็จรูป" class="section" :class="classScrollH2">
            <h2 class="text-2xl font-bold sm:text-3xl text-start">
                <Hashtag name="แผ่นสแลทปูพื้นคอกสำเร็จรูป" href="#แผ่นสแลทปูพื้นคอกสำเร็จรูป" />
            </h2>
            <p class="text-gray-500 text-start">
                แสลทปูพื้นสำเร็จรูป SNR ผลิตจากคอนกรีตเสริมเหล็กซึ่งมีความคงทนแข็งแกร่ง
                โดยใช้เทคโนโลยีแบบเดียวกันกับต่างประเทศ ประกอบง่าย ๆ ประหยัดทั้งเวลา ทั้งแรงงาน
                และที่สำคัญประหยัดค่าใช้จ่ายไม่มีบานปลาย บริษัทสยามน้ำรินจำกัด มีแสลทปูพื้น มีให้เลือก หลายแบบ หลายขนาด
                เข้ากับการใช้งานได้อย่างมีคุณภาพ
            </p>
        </section>

        <!-- Images -->
        <div class="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-2">

            <div class="col-span-4 col-start-1 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/2/1.jpg" alt="banner5" />
            </div>
            <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/2/3.jpg" alt="banner3" />
            </div>

            <div class="col-span-3 col-start-1 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/2/4.jpg" alt="banner6" />
            </div>
            <div class="col-span-1 col-start-4 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/2/2.jpg" alt="banner4" />
            </div>
            <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                    src="/images/products_service/2/5.jpg" alt="banner7" />
            </div>
        </div>

        <!-- Section 2 -->
        <section id="ตัวอย่าง-ขนาดแผ่นสแลทปูพื้นคอกสำเร็จรูปบางขนาดของ-SNR" class="section" :class="classScrollH4">
            <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตัวอย่าง ขนาดแผ่นสแลทปูพื้นคอกสำเร็จรูปบางขนาดของ SNR"
                    href="#ตัวอย่าง-ขนาดแผ่นสแลทปูพื้นคอกสำเร็จรูปบางขนาดของ-SNR" />
            </h4>
            <div class="mt-2 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr class="text-sm">
                            <th></th>
                            <th>ขนาด <strong class="text-gray-600">แผ่นสแลทปูน</strong> SNR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in detailsProduct2" :key="index">
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
defineProps({
    classScrollH2: String,
    classScrollH4: String,
    detailsProduct2: Array,
})
</script>