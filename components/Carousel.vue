<template>
    <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' class="relative z-0 h-fit">
        <div class="hs-carousel relative overflow-hidden w-full min-h-[200px] lg:min-h-[300px] bg-white rounded-none">
            <div
                class="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 h-fit hs-carousel-body start-0 flex-nowrap">
                <div class="hs-carousel-slide">
                    <div class="flex justify-center bg-gray-100 h-fit">
                        <NuxtImg
                            src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194096.jpg&fm=jpg&_gl=1*6m6e8s*_ga*MTY1MDI0NTU2My4xNzEyODExNTcy*_ga_8JE65Q40S6*MTcxMjgxMTU3MS4xLjEuMTcxMjgxMTU3NS4wLjAuMA.."
                            class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center bg-gray-200 h-fit">
                        <NuxtImg src="https://images.pexels.com/photos/9685868/pexels-photo-9685868.jpeg"
                            class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center bg-gray-300 h-fit">
                        <NuxtImg
                            src="https://images.pexels.com/photos/3618480/pexels-photo-3618480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
                    </div>
                </div>
                <div class="hs-carousel-slide">
                    <div class="flex justify-center bg-gray-300 h-fit">
                        <NuxtImg
                            src="https://images.pexels.com/photos/2431402/pexels-photo-2431402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            class="w-full h-[200px] lg:h-[300px] object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>

        <button type="button"
            class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
            <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                    </path>
                </svg>
            </span>
            <span class="sr-only">Previous</span>
        </button>
        <button type="button"
            class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
            <span class="sr-only">Next</span>
            <span class="text-2xl" aria-hidden="true">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
            </span>
        </button>

        <div class="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0">
            <span
                class="border border-gray-300 rounded-full cursor-pointer hs-carousel-active:bg-blue-500 hs-carousel-active:border-blue-500 size-3"></span>
            <span
                class="border border-gray-300 rounded-full cursor-pointer hs-carousel-active:bg-blue-500 hs-carousel-active:border-blue-500 size-3"></span>
            <span
                class="border border-gray-300 rounded-full cursor-pointer hs-carousel-active:bg-blue-500 hs-carousel-active:border-blue-500 size-3"></span>
            <span
                class="border border-gray-300 rounded-full cursor-pointer hs-carousel-active:bg-blue-500 hs-carousel-active:border-blue-500 size-3"></span>
        </div>
    </div>
</template>