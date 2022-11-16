<template>
  <div
    class="search"
  >
    <input
      :value="value"
      class="search__input"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <div
      v-if="value!==''"
      class="search__clear icon-close"
      @click="clearField"
    />
    <div
      class="search__icon icon-search"
    />
  </div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    placeholder: {
      type: String,
      default: 'Поиск по строкам',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    clearField() {
      this.$emit('input', '');
      this.$emit('clear');
    },
  },
};
</script>

<style lang="sass" src="~/assets/sass/components/search.sass" scoped></style>
