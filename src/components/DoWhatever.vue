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
      content: 'Who the fuck does this coach think he is? You trade away all the team\'s quality talent and sign a bunch of D-League scrubs without consulting your coach. The NBA season gets underway, and your team is very bad. Your coach quietly seethes. He\'s been in situation like this before, but this is the most brazen tank job in years and he doesn\'t even get input on D-League guys. There\'s a possibility he might quit. He\'s quietly looking around for another gig.'
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
