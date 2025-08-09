<script setup>
import { useToc } from "../composables/useToc";

const { headings } = useToc();
</script>

<template>
  <aside class="fixed top-20 right-5 p-4 bg-white shadow-lg rounded-lg w-64">
    <h3 class="font-semibold text-lg mb-2"><slot/></h3>
    <ul class="space-y-2">
      <li v-for="heading in headings" :key="heading.id">
        <a :href="`#${heading.id}`" class="text-blue-600 hover:underline">
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>
