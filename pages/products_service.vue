<script setup lang="ts">
useHead({
  title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
  meta: [
    {
      name: 'description',
      property: "og:description",
      content: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
    },
    {
      name: 'title',
      property: "og:title",
      content: "รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด",
    },
  ],
  bodyAttrs: {
    class: ''
  },
  // script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})

import blue_print_product1 from '../static/json/blue_prints/blue_print_product1.json'
import detail_table_product1 from '../static/json/detail_tables/detail_table_product1.json'
import table_of_content from '../static/json/table_of_content.json'

const blueprintsProd1 = blue_print_product1
const detailsProduct1 = detail_table_product1
const tableOfContents = table_of_content
const route = useRoute()

const classScrollH2 = ref('scroll-mt-[calc(40px+40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]')
const classScrollH4 = ref('scroll-mt-[calc(30px+30px+var(--header-height))] lg:scroll-mt-[calc(30px+var(--header-height))]')

const isClicked = ref(false)

const toggleTableOfContents = (currentClicked: boolean) => {
  isClicked.value = currentClicked
}
</script>

<template>
  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">

      <!-- Article 1 -->
      <article class="mb-32 lg:col-span-8">
        <div class="flex-grow mb-8 break-words sm:mx-8 ">

          <div class="py-8 border-b border-gray-200">
            <h1 class="text-3xl font-bold sm:text-4xl text-start">
              สินค้าและบริการ
            </h1>
            <p class="text-gray-500 text-start">
              สร้างโลกของความแข็งแกร่งและคุณภาพด้วยวัสดุก่อสร้างจากเรา!
              เราเสนอสินค้าที่มีคุณภาพสูงที่สุดและมาพร้อมกับความคุ้มค่าที่ยอดเยี่ยม
              ไม่ว่าคุณกำลังก่อสร้างบ้านหรือโครงการใหญ่ ๆ เรามีทุกอย่างที่คุณต้องการเพื่อให้โครงการของคุณประสบความสำเร็จ
            </p>
            <div class="grid grid-cols-6 grid-rows-3 gap-1 lg:gap-3 h-[250px] md:h-[400px] lg:h-[550px] mt-2">
              <div class="col-span-6 col-start-1 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/2.jpg" alt="banner2" />
              </div>

              <div class="col-span-4 col-start-1 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/5.jpg" alt="banner5" />
              </div>
              <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/3.jpg" alt="banner3" />
              </div>

              <div class="col-span-3 col-start-1 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/6.jpg" alt="banner6" />
              </div>
              <div class="col-span-1 col-start-4 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/4.jpg" alt="banner4" />
              </div>
              <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/1/7.jpg" alt="banner7" />
              </div>
            </div>
          </div>

          <div class="mt-8">
            <section id="รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" :class="classScrollH2">
              <h2 class="text-2xl font-bold sm:text-3xl text-start">
                <Hashtag name="รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด" href="#รางระบายน้ำคอนกรีตสำเร็จรูป-พร้อมฝาปิด" />
              </h2>
              <p class="text-gray-500 text-start">
                รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน
                สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด
                ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
              </p>
            </section>
            <section id="ตัวอย่าง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-บริษัทสยามน้ำรินจำกัด"
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
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </li>
                </ul>
              </div>
            </section>
            <section id="ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" :class="classScrollH4">
              <h4 class="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start">
                <Hashtag name="ตาราง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ SNR (บางส่วน)"
                  href="#ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" />
              </h4>
              <div class="mt-2 overflow-x-auto">
                <table class="table">
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
                          <div class="flex space-x-2">
                            <div v-if="item.uditch_1.size != '-'">{{ item.uditch_1.size }} {{ item.uditch_1.unit }}.
                            </div>
                            <div v-else>{{ item.uditch_1.size }}</div>
                          </div>
                          <div v-if="item.uditch_1.thickness" class="text-gray-200">
                            |
                          </div>
                          <div v-if="item.uditch_1.thickness" class="">
                            หนา
                            {{ item.uditch_1.thickness }} cm.
                          </div>
                          <div v-if="item.uditch_1.details" class="text-gray-200">
                            |
                          </div>
                          <div v-if="item.uditch_1.details" class="">
                            {{ item.uditch_1.details }}
                          </div>
                        </div>
                      </td>

                      <td>
                        <div class="flex space-x-2">
                          <div class="flex space-x-2">
                            <div v-if="item.uditch_2.size != '-'">{{ item.uditch_2.size }} {{ item.uditch_2.unit }}.
                            </div>
                            <div v-else>{{ item.uditch_2.size }}</div>
                          </div>
                          <div v-if="item.uditch_2.thickness" class="text-gray-200">
                            |
                          </div>
                          <div v-if="item.uditch_2.thickness" class="">
                            หนา
                            {{ item.uditch_2.thickness }} cm.
                          </div>
                          <div v-if="item.uditch_2.details" class="text-gray-200">
                            |
                          </div>
                          <div v-if="item.uditch_2.details" class="">
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

          <div class="pt-8">
            <section id="แผ่นสแลทปูพื้นคอกสำเร็จรูป" :class="classScrollH2">
              <h2 class="text-2xl font-bold sm:text-3xl text-start">
                <Hashtag name="แผ่นสแลทปูพื้นคอกสำเร็จรูป" href="#แผ่นสแลทปูพื้นคอกสำเร็จรูป" />
              </h2>
              <p class="text-gray-500 text-start">
                รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ
                แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน
                มีแบบฝาปิด
                ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
              </p>
              <ul class="mt-4 leading-7 text-gray-500">
                <li>
                  <NuxtLink to="#">*ฝารางระบายน้ำ IB - C7 รูเหลี่ยม</NuxtLink>
                </li>
                <li>*รางระบายน้ำ IB – 20 ประกอบฝา</li>
                <li>*ฝาปิดสำหรับรางระบายน้ำขนาดภายในกว้าง 30 ซม. (มีร่องมือจับ)</li>
                <li>*ฝารางสำหรับรางกว้างภายใน 30 ซ.ม. แบบมีร่องระบายน้ำ ขนาด 40x50x5 ซ.ม. ใช้ 2 ฝา / 1 ราง</li>
                <li>*รูปแบบประกอบฝากับรางระบายน้ำแบบ (วางบนบ่า)</li>
                <li>*ฝาปิดสำหรับรางระบายน้ำกว้าง 50 ซม. (ฝาแบบทึบมีร่องจับ) IB – C3</li>
                <li>*ฝารางแบบมีร่องระบายน้ำ IB – C4 ใช้ 3 ฝา / 1ราง</li>
                <li>*รูปแบบประกอบฝากับรางระบายน้ำแบบ (วางบนบ่า)</li>
                <li>*รางระบายน้ำ IB-T20 ขนาด 22X100X20 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ IB-T30 ขนาด 30X100X30 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ IB-T35 ขนาด 30X100X50 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ IB-T50 ขนาด 50X100X50 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ ขนาดภายใน 15X100X15 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ IB-T30P / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
                <li>*รางระบายน้ำ IB-T30P ขนาด 50X100X50 ซม. (มีบ่าเหล็กฉาก)</li>
                <li>*ฝารางขนาด 67X50X10 ซม. (สำหรับรางกว้าง 50 ซม. ตกบ่า)</li>
                <li>*ฝารางระบายน้ำแบบตะแกรงเหล็ก IB-C9 ชนิดมีบ่าฉาก</li>
                <li>*รางระบายน้ำ ขนาดภายใน 30X95X30 ซม. ใส่ฝาตะแกรงแบบบ่าฉาก</li>
                <li>*ฝารางแบบตะแกรงเหล็ก IB-C8 แบบวางบนบ่าราง</li>
                <li>*รางระบายน้ำขนาดภายใน 0.30X0.95X0.30 ซม. มีฝาบ่ารับฝาตะแกรง</li>
                <li>*ฝาปิดรางระบายน้ำร่อง V แบบรับน้ำหนัก IB – C6</li>
                <li>*ภาพประกอบฝาราง IB-C6 กับราง IB-T30P และ IB-T35P</li>
                <li>*ฝาปิดรางระบายน้ำชนิดรับน้ำหนัก IB-C5</li>
                <li>*รูปแบบลักษณะการวางฝารับน้ำหนัก บนรางระบายน้ำแบบมีบ่ารับฝา</li>
              </ul>
            </section>
          </div>

        </div>
      </article>

      <!-- Table of Contents -->
      <aside
        class="lg:col-span-2 order-first lg:order-last sticky top-[--header-height] backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-[1]">
        <nav>
          <div class="py-3 space-y-3 border-b border-gray-200 border-dashed lg:py-8 lg:border-0">
            <button class="flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group lg:disabled"
              tabindex="-1" @click="toggleTableOfContents(!isClicked)">
              <span class="font-semibold truncate text-sm/6">Table of Contents</span>
              <span
                class="i-ph-caret-down lg:!hidden ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 w-4 h-4 text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <ul :class="isClicked ? 'hidden space-y-1 lg:block' : 'space-y-1 lg:block'">
              <li v-for="content in tableOfContents"
                :class="isClicked ? 'hidden space-y-1 lg:block' : 'space-y-1 lg:block'">
                <!-- <div v-if="route.fullPath === content.href" class="lg:block"> -->
                <NuxtLink :key="content.name" :to="content.href"
                  :class="route.fullPath === content.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-500 truncate text-sm/6 hover:text-gray-700'">
                  {{ content.name }}
                </NuxtLink>
                <ul v-if="content.children" class="space-y-1">
                  <li v-for="child in content.children" class="ml-3 space-y-1">
                    <NuxtLink :key="child.name" :to="child.href"
                      :class="route.fullPath === child.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-500 truncate text-sm/6 hover:text-gray-700'">
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
                <!-- </div> -->
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>