import { onMounted, ref } from "vue";

export function useToc() {
  const headings = ref([]);

  onMounted(() => {
    const headingElements = Array.from(document.querySelectorAll("main h2"));
    headings.value = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
    }));
  });

  return { headings };
}
