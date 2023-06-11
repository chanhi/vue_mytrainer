<template>
  <div class="programs_container">
    <div class="programs_header">
      <h1>This is an programs page</h1>
      <div></div>
    </div>
    <div
      class="programs_cards"
      v-for="(program, index) in programs"
      :key="index"
    >
      <div class="program_img">
        <img
          :src="require(`@/assets/programs/${program[2]}.jpg`)"
          alt="Image"
        />
      </div>
      <div class="program">
        <div class="program_name">{{ program[0] }}</div>
        <div class="creator">{{ program[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramsView',
  data () {
    return {
      programs: {
        nSuns: ['nSuns', 'r/Fitness', 'nsuns'],
        '531BBB': ['531BBB', 'Jim Wendler', '531bbb'],
        rampage: ['rampage', 'Geoffrey', 'rampage'],
        GZCL: ['GZCL', 'Cody Lefever', 'gzcl'],
        redditPPL: ['redditPPL', 'r/Fitness', 'ppl']
      }
    }
  }
}
</script>
<style>
.programs_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.programs_header {
  display: flex;
  justify-content: space-between;
}
.programs_cards {
  width: 80%;
  margin: 25px;
  display: flex;
  justify-content: center;
}
</style>
