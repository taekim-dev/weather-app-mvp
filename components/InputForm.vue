<template>
    <div class="flex justify-center mt-10">
      <form class="w-full max-w-sm">
        <div class="mb-6">
          <label for="fromCity" class="block text-gray-700 text-sm font-bold mb-2">From</label>
          <input type="text" id="fromCity" placeholder="Enter current city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
  
        <div class="mb-6">
          <label for="toCity" class="block text-gray-700 text-sm font-bold mb-2">To</label>
          <input type="text" id="toCity" placeholder="Enter destination city" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
  
        <!-- Additional fields like date picker can be added here -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputForm',
  }
  </script>
  