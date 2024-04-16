<script setup lang="ts">
useHead({
    title: 'รางระบายน้ำ รางระบายน้ำคอนกรีต',
    meta: [
        {
            property: "og:description",
            name: 'description',
            content: 'รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก',
        },
        {
            property: "og:title",
            name: 'title',
            content: "รางระบายน้ำ รางระบายน้ำคอนกรีต",
        },
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
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
            <article class="mb-32 lg:col-span-8">
                <div class="flex-grow mb-8 break-words sm:mx-8 ">
                    <div class="py-8 border-b border-gray-200">
                        <h1 class="text-3xl font-bold sm:text-4xl text-start">
                            ออกแบบ และ ก่อสร้าง
                        </h1>
                        <p class="text-gray-500 text-start">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusamus, animi vero nisi
                            minima vitae placeat doloremque, possimus voluptates modi aliquam. Earum debitis quo
                            inventore soluta numquam temporibus, quidem est.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>