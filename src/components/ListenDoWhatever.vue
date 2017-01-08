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
  name: 'listen-do-whatever',
  data () {
    return {
      content: 'Coach Frown is disgruntled but he\'s playing along. He\'s doing the best job he can but trust has been broken. And just when he\'s getting the a feel for the squad, you trade a bunch of dudes for second round picks. Coach Frown starts leaking stories to the media anonymously.'
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
