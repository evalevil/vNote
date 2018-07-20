<template lang="html">
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Notes App
    </h4>
    <a class="ui right floated basic violet button"
    v-on:click="create">
      添加笔记
    </a>
    <div class="ui divided items">
      <note
      v-for="entity in entities"
      v-bind:entity="entity">
      </note>
      <span
        class="ui small disabled header"
        v-if="!entities.length">
        空笔记，请按下 '添加笔记' 创建笔记。
      </span>
    </div>
  </div>
</template>

<script>
import Note from './Note'
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.initial()
  },
  methods: {
    ...mapActions([
      'initial',
      'create'
    ])
  },
  computed: {
    ...mapGetters([
      'entities'
    ])
  },
  components: {
    Note
  }
}
</script>

<style lang="css">
</style>
