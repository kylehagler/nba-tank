<template>
  <div class="container">
    <span v-html="content"></span>

    <ul class="choices">
      <li v-on:click="hireCoach"><a href="javascript://">Hire a coach</a></li>
      <li v-on:click="tradePlayers"><a href="javascript://">Trade away your players for picks</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'start-season',
  data() {
    return {
      content: '<p>Congratulations. You are the General Manager of a bad NBA team. In order to contend for a title, you will need to acquire star players. Unfortunately, the new CBA makes signing stars in free agency difficult. You have no assets to trade. It is time to tank.</p><p>How would you like to begin?</p>'
    }
  },
  methods: {
    hireCoach: function() {
      this.$store.state.condition = 'stable';
      this.$store.state.coachHired = true;
      this.$store.state.moves += 1;
      this.$store.state.stage = 'hire coach';
    },
    tradePlayers: function() {
      this.$store.state.condition = 'blunder';
      this.$store.state.draftPicks = Math.floor(Math.random() * 3) + 1;
      this.$store.state.moves += 1;
      this.$store.state.stage = 'trade players for picks';
    }
  },
  computed: {
    condition() {
      return this.$store.state.condition;
    }
  }
}
</script>
