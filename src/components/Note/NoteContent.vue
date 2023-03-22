<template>
    <div class="note-content">
      <note-unit v-for="(one_note,index) in note_list"
      :key="index" :note_info="one_note"/>
    </div>
</template>

<script>
import NoteUnit from '../Note/NoteUnit.vue'
export default {
  name: 'notecontent',
  components:{NoteUnit},
  data () {
    return {

    }
  },
  props: {
    note_list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.note-content .note-container:nth-child(odd) {
  float: left;
}
.note-content .note-container:nth-child(even) {
  float: right;
}
</style>