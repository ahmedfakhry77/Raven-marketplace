<template>
  <nav
    class="top-0 z-50 fixed w-full flex flex-wrap items-center justify-between py-3 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg px-8 sm:px-28 rounded-b-2xl"
  >
    <div class="grid grid-cols-8 sm:grid-cols-4 container w-full">
      <div class="flex items-center">
        <img
          class="cursor-pointer w-10 block sm:hidden"
          src="../../public/images/mylogo.png"
          alt="logo"
        />
        <img
          class="cursor-pointer w-28 hidden sm:block"
          src="../../public/images/mylogo.png"
          alt="logo"
        />
      </div>
      <div class=" col-span-4 sm:col-span-2 flex items-center">
        <form class="grid grid-cols-4 w-full" method="GET">
          <div class="search_input flex items-center col-span-4 sm:col-span-3">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                name="keyword"
                class="bg-gray-50 border border-schemeSecondary-sky text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Search for products, vendors,..."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-schemeSecondary-sky rounded-lg hidden sm:block"
          >
            Search
          </button>
        </form>
      </div>

      <div class="flex items-center justify-end col-span-3 sm:col-span-1">
        <span class="text-schemeSecondary-sky flex justify-start ml-2 sm:mx-5">
          <svg
            class="h-6 w-6 text-schemeSecondary-sky mx-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          <span class="hidden sm:block">Orders</span>
        </span>

        <span class="text-schemeSecondary-sky flex justify-start">
          <svg
            class="h-6 w-6 text-schemeSecondary-sky mx-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            />
          </svg>
          <span class="hidden sm:block">Cart</span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-bar",

  data: function () {
    return {};
  },
  methods: {},
};
</script>
<style></style>
