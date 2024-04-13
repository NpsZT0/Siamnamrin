<script setup lang="ts">
const navigation = useRouterJson()

const route = useRoute()
console.log("rout", route.fullPath)
</script>

<template>
  <div class="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">
      <!-- Article 1 -->


      <div class="mb-32 lg:col-span-8">
        <article class="flex-grow mx-8 mb-8 break-words ">
          <section class="py-8 border-b border-gray-200">
            <h1 class="text-4xl font-bold text-start">
              สินค้าและบริการ
            </h1>
            <p class="text-lg text-gray-500 text-start">
              สร้างโลกของความแข็งแกร่งและคุณภาพด้วยวัสดุก่อสร้างจากเรา!
              เราเสนอสินค้าที่มีคุณภาพสูงที่สุดในวงการและมาพร้อมกับความคุ้มค่าที่ยอดเยี่ยม
              ไม่ว่าคุณกำลังก่อสร้างบ้านหรือโครงการใหญ่ ๆ เรามีทุกอย่างที่คุณต้องการเพื่อให้โครงการของคุณประสบความสำเร็จ
            </p>
          </section>
          <section class="mt-8">
            <h2 id="รางระบายน้ำพร้อมฝาปิด-คอนกรีตสำเร็จรูป"
              class="text-3xl font-bold text-start scroll-mt-[calc(40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]">
              <a class="relative border-none group lg:-ml-2 lg:pl-2" href="#รางระบายน้ำพร้อมฝาปิด-คอนกรีตสำเร็จรูป">
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
                </span>รางระบายน้ำพร้อมฝาปิด คอนกรีตสำเร็จรูป
              </a>
            </h2>
            <p class="text-lg text-gray-500 text-start">
              รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของบริษัทสยามน้ำรินจำกัด มีความ แข็งแรงทนทาน
              สะดวกในการติดตั้งใช้เวลาน้อย รักษาความสะอาดง่าย มีวิธีการเชื่อมต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด
              ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
            </p>

            <h4 class="mt-4 text-xl font-semibold text-start">
              ตัวอย่าง รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด ของ บริษัทสยามน้ำรินจำกัด
            </h4>
            <ul class="leading-7 ">
              <li class="text-gray-500 hover:text-primary w-fit h-fit">
                <NuxtLink to="#">ฝารางระบายน้ำ IB - C7 รูเหลี่ยม</NuxtLink>
              </li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB – 20 ประกอบฝา</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝาปิดสำหรับรางระบายน้ำขนาดภายในกว้าง 30 ซม. (มีร่องมือจับ)</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝารางสำหรับรางกว้างภายใน 30 ซ.ม. แบบมีร่องระบายน้ำ ขนาด 40x50x5 ซ.ม. ใช้ 2 ฝา / 1 ราง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รูปแบบประกอบฝากับรางระบายน้ำแบบ (วางบนบ่า)</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝาปิดสำหรับรางระบายน้ำกว้าง 50 ซม. (ฝาแบบทึบมีร่องจับ) IB – C3</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝารางแบบมีร่องระบายน้ำ IB – C4 ใช้ 3 ฝา / 1ราง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รูปแบบประกอบฝากับรางระบายน้ำแบบ (วางบนบ่า)</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T20 ขนาด 22X100X20 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T30 ขนาด 30X100X30 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T35 ขนาด 30X100X50 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T50 ขนาด 50X100X50 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ ขนาดภายใน 15X100X15 ซม. / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T30P / วิธีการติดตั้งรางระบายน้ำ SNR รุ่นฝาเหล็กด้านล่าง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ IB-T30P ขนาด 50X100X50 ซม. (มีบ่าเหล็กฉาก)</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝารางขนาด 67X50X10 ซม. (สำหรับรางกว้าง 50 ซม. ตกบ่า)</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝารางระบายน้ำแบบตะแกรงเหล็ก IB-C9 ชนิดมีบ่าฉาก</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำ ขนาดภายใน 30X95X30 ซม. ใส่ฝาตะแกรงแบบบ่าฉาก</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝารางแบบตะแกรงเหล็ก IB-C8 แบบวางบนบ่าราง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รางระบายน้ำขนาดภายใน 0.30X0.95X0.30 ซม. มีฝาบ่ารับฝาตะแกรง</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝาปิดรางระบายน้ำร่อง V แบบรับน้ำหนัก IB – C6</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ภาพประกอบฝาราง IB-C6 กับราง IB-T30P และ IB-T35P</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">ฝาปิดรางระบายน้ำชนิดรับน้ำหนัก IB-C5</li>
              <li class="text-gray-500 hover:text-primary w-fit h-fit">รูปแบบลักษณะการวางฝารับน้ำหนัก บนรางระบายน้ำแบบมีบ่ารับฝา</li>
            </ul>
          </section>
          <br>
          <section>
            <h2 id="แผ่นสแลทปูพื้นคอกสำเร็จรูป"
              class="text-3xl font-bold text-start scroll-mt-[calc(40px+var(--header-height))] lg:scroll-mt-[calc(40px+var(--header-height))]">
              <a class="relative border-none group lg:-ml-2 lg:pl-2" href="#แผ่นสแลทปูพื้นคอกสำเร็จรูป">
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
                </span>แผ่นสแลทปูพื้นคอกสำเร็จรูป
              </a>
            </h2>
            <p class="text-lg text-gray-500 text-start">
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
        </article>
      </div>

      <!-- Right menu -->
      <div class="order-2 h-auto lg:col-span-3 lg:order-last">
        <aside
          class="lg:col-span-2 order-last sticky top-[--header-height] -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-x-hidden max-h-[calc(100vh-var(--header-height))] z-0">
          <!-- Navbar menu content here -->
          <ul v-for="item in navigation" class="px-1 lg:block menu menu-horizontal">
            <li v-if="item.children" v-for="child in item.children" class="lg:block">
              <div v-if="route.fullPath === child.href" class="lg:block">
                <NuxtLink :key="child.name" :to=child.href class="block w-auto truncate text-primary text-sm/6">
                  {{ child.name }}
                </NuxtLink>
              </div>
              <div v-else class="lg:block">
                <NuxtLink :key="child.name" :to=child.href class="block w-auto text-gray-500 truncate text-sm/6">
                  {{ child.name }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </aside>
      </div>

    </div>
  </div>
</template>