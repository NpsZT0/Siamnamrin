<!-- <template>
    <div >
        <ul id="navbar__list">
            <li><a class="menu-items active" id="menu-1" href="#section1">Section 1</a></li>
            <li><a class="menu-items" id="menu-2" href="#section2">Section 2</a></li>
            <li><a class="menu-items" id="menu-3" href="#section3">Section 3</a></li>
            <li><a class="menu-items" id="menu-4" href="#section4">Section 4</a></li>
        </ul>
    
        <section class="container">
            <div id="section1" class="sec">
                <h2>Section 1</h2>
            </div>
            <div id="section2" class="sec">
                <h2>Section 2</h2>
            </div>
            <div id="section3" class="sec">
                <h2>Section 3</h2>
            </div>
            <div id="section4" class="sec">
                <h2>Section 4</h2>
            </div>
        </section>
    
        <div>
            <button ref="scrollToTopButton" @click="scrollToTop"
                class="fixed p-2 text-center rounded-full transform bottom-[5%] left-[50%] backdrop-blur bg-primary/50 z-[2]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
    },
    mounted() {
        // Add scroll event listener when component is mounted
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.scroll);
    },
    beforeDestroy() {
        // Remove scroll event listener when component is destroyed
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("scroll", this.scroll);
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
        scroll() {
            const topMenu = document.getElementById("navbar__list");
            const navTopHeight = topMenu.offsetHeight + 1;
            const menuItems = document.querySelectorAll(".menu-items");
            const scrollItems = document.querySelectorAll(".sec");
            let fromTop = window.pageYOffset + navTopHeight + 40;
            let cur = [];

            [...scrollItems].forEach(function (item) {
                if (item.offsetTop < fromTop) {
                    cur.push(item);
                }
            });

            cur = cur[cur.length - 1];
            let id = cur ? cur.id : "";

            // Assuming lastId is defined in the component's data
            if (this.lastId !== id) {
                this.lastId = id;

                menuItems.forEach(function (elem, index) {
                    elem.classList.remove("active");
                    const filteredItems = [...menuItems].filter(elem => elem.getAttribute("href") === `#${id}`);
                    filteredItems[0].classList.add("active");
                });
            }
        }
    }
}
</script>

<style>

.container {
    width: 100%;
    height: 2000px;
    margin: 0 auto;
    position: relative;
}

#navbar__list {
    height: 40px;
    background-color: #55443D;
    display: block;
    align-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    margin: 0 auto;

}

#navbar__list ul {
    padding: 0;
    list-style: none;
    position: relative;
    display: table;
    margin: 0 auto;
}

#navbar__list li {
    display: table-cell;
}

#navbar__list li a {
    padding: 10px 20px;
    display: block;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

#navbar__list li a:hover {
    color: #dc5c26;
}

#navbar__list li a .active {
    color: #F38A8A;
    border-bottom: 3px solid #F38A8A;
}

.active {
    color: #03c4ff;
    border-bottom: 3px solid #03c4ff;
}

.sec {
    height: 50vh;
    display: block;
}

.sec h2 {
    position: relative;
    top: 50%;
    left: 50%;
}

#section1 {
    background-color: green;
}

#section2 {
    background-color: yellow;
}

#section3 {
    background-color: blue;
}

#section4 {
    background-color: grey;
}
</style> -->



<template>
    <div class="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:grid lg:grid-cols-11 lg:gap-8">
            <article class="mb-32 lg:col-span-8">
                <div class="flex-grow mb-8 break-words sm:mx-8 ">
                    <div class="py-8 border-b border-gray-200">
                        <h1 class="text-3xl font-bold sm:text-4xl text-start">
                            เกี่ยวกับเรา
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