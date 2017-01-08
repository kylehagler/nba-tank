<template>
  <div class="container">

    <span v-html="content"></span>

  </div>
</template>

<script>

export default {
  name: 'silicon-valley',
  data () {
    return {
      content: 'You have been fired. Instead of taking another NBA front office job, you decide to take a sabbatical in Silicon Valley where failure is species of virtue. Every day, you drink 25 cups of coffee and wear the same outfit. For fun, you watch Moneyball, which always makes you tear up.'
    }
  }
}

</script>
