<template>
  <div
    class="search"
  >
    <input
      :value="value"
      class="search__input"
      :class="{'search__input_err': isError}"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <div
    v-if="isError"
    class="search__err">
      Введите не менее 2х символов
    </div>
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
    isError: {
      type: Boolean,
      default: false,
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
