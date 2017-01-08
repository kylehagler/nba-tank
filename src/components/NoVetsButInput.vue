<template>
  <div class="container">
  	
    <span v-html="content"></span>

    <ul class="choices">
      <li v-on:click="endSeason"><a href="javascript://">End the season</a></li>
      
    </ul>
  </div>
</template>

<script>

export default {
  name: 'no-vets-but-input',
  data () {
    return {
      content: '<p>Coach Frown is disappointed. He has qualms about working with such a young team. After you trade a bunch of vets for second round picks, the team flounders. Frown wishes he had some veterans to help police the locker room. He\'s also concerned, should this gig not pan out, that he may never get another job because his win-loss record is a trash fire. That said, when the media begins to circle, you come to the defense of your coach in the press. Coach Frown feels that you have his back. Despite the losses, the team is in surprisingly good spirits.</p>'
    }
  },
  methods: {
    endSeason: function() {
      this.$store.state.stage = 'end of season';
    }
  },
  computed: {
    
  }
}
</script>
