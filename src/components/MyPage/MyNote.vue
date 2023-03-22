<template>
  <div id="mynote-container">
    <note-content :note_list="note_list"></note-content>
  </div>
</template>

<script>
import NoteContent from '../Note/NoteContent.vue'

export default {
  name: 'mynote',
  components:{NoteContent},
  data () {
    return {
      note_list: [
        {
          pic: 'note_pic1.jpg',
          title: '猫猫真可爱！',
          author_profile: 'author_pic1.jpeg',
          author_name: 'Bunny',
          ifLike: false
        },
        {
          pic: 'note_pic2.jpg',
          title: 'wow',
          author_profile: 'author_pic2.jpeg',
          author_name: 'L',
          ifLike: true
        },
        {
          pic: 'note_pic2.jpg',
          title: 'wow',
          author_profile: 'author_pic2.jpeg',
          author_name: 'L',
          ifLike: true
        },
        {
          pic: 'note_pic2.jpg',
          title: 'wow',
          author_profile: 'author_pic2.jpeg',
          author_name: 'L',
          ifLike: true
        },
        {
          pic: 'note_pic2.jpg',
          title: 'wow',
          author_profile: 'author_pic2.jpeg',
          author_name: 'L',
          ifLike: true
        }
      ]
    }
  }
}
</script>

<style>

</style>