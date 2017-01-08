<template>
  <div class="container">
  	
    <span v-html="content"></span>

    <p>You have {{draftPicks}} second rounder<span v-if="draftPicks !== 1">s</span>.</p>

    <ul class="choices">
      <li v-on:click="endSeason"><a href="javascript://">End the season</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'sign-veterans',
  data () {
    return {
      content: 'You sign a bunch of solid old contributors like Jet Terry and Ed Davis and Garry Harris, and Timofey Mozgov. They devour your cap but it\'s worth it to have some veteran leadership around. The mood around the team is generally OK. But, the lack of direction is noticeable. Are you rebuilding or not? You are no closer to a star player, much less three. You trade a one decent player for a second rounder, but keep the team intact. This team might win too many games to get a high draft pick.' 
    }
  },
  methods: {
    endSeason: function() {
      this.$store.state.stage = 'end of season';
    }
  },
  computed: {
    condition() {
      return this.$store.state.condition;
    },
    draftPicks() {
      return this.$store.state.draftPicks;
    }
  }
}
</script>
