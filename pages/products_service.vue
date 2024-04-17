<template>
  <div class="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">

      <!-- Article 1 -->
      <article class="mb-32 lg:col-span-8">
        <div class="flex-grow mb-8 break-words sm:mx-8 ">

          <!-- Introduction -->
          <div class="py-8 border-b border-gray-200">
            <h1 class="text-3xl font-bold sm:text-4xl text-start">
              สินค้าและบริการ
            </h1>
            <p class="text-gray-500 text-start">
              สร้างโลกของความแข็งแกร่งและคุณภาพด้วยวัสดุก่อสร้างจากเรา!
              เราเสนอสินค้าที่มีคุณภาพสูงที่สุดและมาพร้อมกับความคุ้มค่าที่ยอดเยี่ยม
              ไม่ว่าคุณกำลังก่อสร้างบ้านหรือโครงการใหญ่ ๆ เรามีทุกอย่างที่คุณต้องการเพื่อให้โครงการของคุณประสบความสำเร็จ
            </p>
            <div class="p-2 rounded-md lg:p-4 bg-gray-300/75">
              <Carousel :links="carouselLinks" />
            </div>
          </div>
          <div>
            <!-- Your content here -->
            <button ref="scrollToTopButton" @click="scrollToTop"
              class="fixed p-2 text-center rounded-full transform bottom-[5%] left-[50%] backdrop-blur bg-primary/50 z-[2]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
          <!-- Product 1 -->
          <div class="mt-8">
            <!-- Section 1 -->
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

            <!-- Images -->
            <div class="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-2">

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

            <!-- Section 2 -->
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

            <!-- Section 3 -->
            <section id="ตาราง-รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิดของ-SNR" :class="classScrollH4">
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
                            <div v-if="item.uditch_1.size != '-'">{{ item.uditch_1.size }} {{ item.uditch_1.unit }}.
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
                            <div v-if="item.uditch_2.size != '-'">{{ item.uditch_2.size }} {{ item.uditch_2.unit }}.
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

          <!-- Product 2 -->
          <div class="pt-8">
            <!-- Section 1 -->
            <section id="แผ่นสแลทปูพื้นคอกสำเร็จรูป" :class="classScrollH2">
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
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/2/1.jpg" alt="banner5" />
              </div>
              <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/2/3.jpg" alt="banner3" />
              </div>

              <div class="col-span-3 col-start-1 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/2/4.jpg" alt="banner6" />
              </div>
              <div class="col-span-1 col-start-4 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/2/2.jpg" alt="banner4" />
              </div>
              <div class="col-span-2 col-end-7 overflow-hidden rounded-md">
                <img
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                  src="/assets/images/products_service/2/5.jpg" alt="banner7" />
              </div>
            </div>

            <!-- Section 2 -->
            <section id="ตัวอย่าง-ขนาดแผ่นสแลทปูพื้นคอกสำเร็จรูปบางขนาดของ-SNR" :class="classScrollH4">
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
                            <div v-if="item.uditch_1.size != '-'">{{ item.uditch_1.size }} {{ item.uditch_1.unit }}.
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

        </div>
      </article>

      <!-- Table of Contents -->
      <aside
        class="lg:col-span-3 order-first lg:order-last sticky top-[--header-height] backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-[0]">
        <nav>
          <div class="border-b border-gray-200 border-dashed lg:py-8 lg:border-0">
            <button class="py-3 flex items-center gap-1.5 lg:cursor-text lg:select-text w-full h-full group lg:disabled"
              tabindex="-1" @click="toggleTableOfContents(!isClicked)">
              <span class="font-semibold truncate text-sm/6">Table of Contents</span>
              <span
                :class="isClicked ? 'lg:!hidden ms-auto transform transition-transform duration-200 rotate-180 flex items-center justify-center flex-shrink-0 mr-1.5 w-4 h-4 text-gray-900'
                : 'lg:!hidden ms-auto transform transition-transform duration-200 flex items-center justify-center flex-shrink-0 mr-1.5 w-4 h-4 text-gray-900'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <ul :class="isClicked ? 'space-y-1 lg:block' : 'hidden space-y-1 lg:block'">
              <li v-for="content in tableOfContents"
                :class="isClicked ? 'space-y-1 lg:block' : 'hidden space-y-1 lg:block'">
                <!-- <div v-if="route.fullPath === content.href" class="lg:block"> -->
                <NuxtLink :key="content.name" :to="content.href"
                  :class="route.fullPath === content.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'">
                  {{ content.name }}
                </NuxtLink>
                <ul v-if="content.children" class="space-y-1">
                  <li v-for="child in content.children" class="ml-3 space-y-1">
                    <NuxtLink :key="child.name" :to="child.href"
                      :class="route.fullPath === child.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'">
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
      <!-- class="absolute bottom-[16rem] right-[4rem] z-[1]" -->

    </div>
  </div>
</template>

<script>
// useHead({
//   title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
//   meta: [
//     {
//       property: "og:title",
//       content: "รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด",
//     },
//     {
//       name: 'description',
//       content: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
//     },
//     {
//       property: "og:description",
//       content: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
//     },
//   ],
//   bodyAttrs: {
//     class: ''
//   },
//   // script: [{ innerHTML: 'console.log(\'Hello world\')' }]
// })

import blue_print_product1 from '../static/json/blue_prints/blue_print_product1.json'
import detail_table_product1 from '../static/json/detail_tables/detail_table_product1.json'
import detail_table_product2 from '../static/json/detail_tables/detail_table_product2.json'
import table_of_content from '../static/json/table_of_content.json'

export default {
  setup() {
    useSeoMeta({
      viewport: 'width=device-width, initial-scale=1.0',

      title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
      description: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
      keywords: 'Precast Concrete',

      ogType: 'website',
      ogTitle: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
      ogDescription: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
      ogImage: '/assets/images/products_service/1/2.jpg',
      ogUrl: 'https://www.siamnamrin.com/products_service',
      ogSiteName: 'siamnamrin.com',
      ogLocale: 'th_TH',

      // twitterCard: 'summary_large_image',
      // twitterSite: 'siamnamrin.com',
      // twitterTitle: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
      // twitterDescription: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
    })
    const blueprintsProd1 = blue_print_product1
    const detailsProduct1 = detail_table_product1
    const detailsProduct2 = detail_table_product2
    const tableOfContents = table_of_content
    const route = useRoute()

    const classScrollH2 = ref('scroll-mt-[calc(40px+40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]')
    const classScrollH4 = ref('scroll-mt-[calc(30px+30px+var(--header-height))] lg:scroll-mt-[calc(30px+var(--header-height))]')

    const isClicked = ref(false)

    const carouselLinks = [
      {
        src: "/images/products_service/1/2.jpg",
        alt: "รางน้ำคอนกรีตสำเร็จรูป",
      },
      {
        src: "/images/products_service/2/5.jpg",
        alt: "ผนังสำเร็จรูป ระบบ Knockdown",
      },
      {
        src: "/images/products_service/3/2.jpg",
        alt: "แสลทปูพื้นคอนกรีตสำเร็จรูป",
      },
      {
        src: "/images/products_service/4/3.jpg",
        alt: "ระบบ เสา คาน ตอม่อ สำเร็จรูป",
      },
      {
        src: "/images/products_service/5/5.jpg",
        alt: "สแลทพ่อพันธุ์ สแลทคอกคลอด ผนังคอกหมูขุน",
      },
      {
        src: "/images/products_service/6/4.jpg",
        alt: "รั้วและกำแพงคอนกรีตสำเร็จรูป",
      },
    ]
    return {
      blueprintsProd1,
      detailsProduct1,
      detailsProduct2,
      tableOfContents,
      route,
      classScrollH2,
      classScrollH4,
      isClicked,
      carouselLinks,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollToTopButton = this.$refs.scrollToTopButton;
      if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
        scrollToTopButton.style.transition = 'transform 0.5s ease'; // Adjust duration and easing as needed
        scrollToTopButton.style.transform = 'scale(1)'; // Example transform
      } else {
        scrollToTopButton.style.transition = 'transform 0.5s ease'; // Adjust duration and easing as needed
        scrollToTopButton.style.transform = 'scale(0)'; // Example transform
        setTimeout(() => {
          scrollToTopButton.style.display = 'none';
        }, 500); // Adjust delay to match transition duration
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    toggleTableOfContents(currentClicked) {
      isClicked.value = currentClicked
    }
  }
};
</script>
