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
            <div class="p-2 mt-4 rounded-md lg:p-4 bg-gray-300/75">
              <Carousel :links="carouselLinks" />
            </div>
          </div>

          <!-- Product 1 -->
          <ProductsServiceProd1 :classScrollH2="classScrollH2" :classScrollH4="classScrollH4"
            :blueprintsProd1="blueprintsProd1" :detailsProduct1="detailsProduct1" />

          <!-- Product 2 -->
          <ProductsServiceProd2 :classScrollH2="classScrollH2" :classScrollH4="classScrollH4"
            :detailsProduct2="detailsProduct2" />

          <!-- Product 3 -->
          <ProductsServiceProd3 :classScrollH2="classScrollH2" :classScrollH4="classScrollH4"
            :blueprintsProd3="blueprintsProd3" :detailsProduct3="detailsProduct3" />
        </div>
      </article>

      <!-- Table of Contents -->
      <aside
        class="lg:col-span-3 order-first lg:order-last sticky top-[--header-height] backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-[1] lg:z-[0]">
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
              <li v-for="(content, index) in tableOfContents"
                :class="isClicked ? 'space-y-1 lg:block' : 'hidden space-y-1 lg:block'">
                <NuxtLink :key="content.name" :to="content.href" class="link-items" :id="'link-' + (index + 1)"
                  :class="route.fullPath === content.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'">
                  {{ content.name }}
                </NuxtLink>
                <ul v-if="content.children" class="space-y-1">
                  <li v-for="child in content.children" class="ml-3 space-y-1">
                    <NuxtLink :key="child.name" :to="child.href" class="link-items" :id="'link-' + (index + 1)"
                      :class="route.fullPath === child.href ? 'block text-primary truncate text-sm/6' : 'block text-gray-600 truncate text-sm/6 hover:text-gray-700'">
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Scroll to top -->
      <ScrollToTopButton />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1.0',

  title: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
  description: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
  keywords: 'Precast Concrete',

  ogType: 'website',
  ogTitle: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
  ogDescription: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
  ogImage: '/images/products_service/1/2.jpg',
  ogUrl: 'https://www.siamnamrin.com/products_service',
  ogSiteName: 'siamnamrin.com',
  ogLocale: 'th_TH',

  // twitterCard: 'summary_large_image',
  // twitterSite: 'siamnamrin.com',
  // twitterTitle: 'รางระบายน้ำคอนกรีตสำเร็จรูป พร้อมฝาปิด',
  // twitterDescription: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
})

// Json data
import blue_print_product1 from '../static/json/blue_prints/blue_print_product1.json'
import blue_print_product3 from '../static/json/blue_prints/blue_print_product3.json'
import detail_table_product1 from '../static/json/detail_tables/detail_table_product1.json'
import detail_table_product2 from '../static/json/detail_tables/detail_table_product2.json'
import detail_table_product3 from '../static/json/detail_tables/detail_table_product3.json'
import table_of_content from '../static/json/table_of_content.json'

const blueprintsProd1 = blue_print_product1
const blueprintsProd3 = blue_print_product3
const detailsProduct1 = detail_table_product1
const detailsProduct2 = detail_table_product2
const detailsProduct3 = detail_table_product3
const tableOfContents = table_of_content

// Vue Composition API
const route = useRoute()
const classScrollH2 = ref('scroll-mt-[calc(40px+40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]')
const classScrollH4 = ref('scroll-mt-[calc(30px+30px+var(--header-height))] lg:scroll-mt-[calc(30px+var(--header-height))]')
const isClicked = ref(false)

// Variables
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

// Functions
const scrollSpy = () => {
  const navTopHeight = 72 + 40;
  const menuItems = document.querySelectorAll(".link-items");
  const scrollItems = document.querySelectorAll(".section");
  let fromTop = window.pageYOffset + navTopHeight + 40;
  let cur = [];
  let lastId
  [...scrollItems].forEach(function (item) {
    if (item.offsetTop < fromTop) {
      cur.push(item);
    }
  });

  cur = cur[cur.length - 1];
  let id = cur ? cur.id : "";

  // Assuming lastId is defined in the component's data
  if (lastId !== id) {
    lastId = id;

    if (menuItems.length) {
      menuItems.forEach(function (elem, index) {
        elem.classList.remove("text-primary");

        const filteredItems = [...menuItems].filter(elem => elem.getAttribute("href").slice(17) === `#${id}`);
        if (filteredItems.length > 0) {
          filteredItems[0].classList.add("text-primary");
        }
      });
    }
  }
}
const toggleTableOfContents = (currentClicked) => {
  isClicked.value = currentClicked
  console.log(isClicked)
}

// Listen for scroll event on mount
onMounted(() => {
  window.addEventListener('scroll', scrollSpy);
})
</script>
