<template>
  <div class="container">
    <div class="mt-5 justify-content-start align-items-center  mx-0">
      <label style="text-color:white ; font-size:100px">{{ result }} Gün</label><br>
      <label style="text-color:white ; font-size:250px">{{ hour }}: {{ minutes }}:</label>
      <label style="text-color:white ; font-size:250px">{{ seconds }}</label>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      result: "",
      today: 0,
      dDay: 0,
      MS_one_day: (1000 * 60 * 60 * 24),
      hour: "",
      MS_one_hour: (1000 * 60 * 60),
      temp: "",
      minutes: "",
      seconds: "",
    };
  },

  mounted() {
    this.calculateToday()
    setInterval(() => {
      this.calculateToday()
    }, 1000)
  },

  methods: {
    calculateToday() {
      let currentTime = new Date();
      this.dDay = new Date(2024, 0, 1, 0, 0, 0, 0)
      this.howManyDays(this.dDay, currentTime)
    },
    addZero(value) {
      return value.length <= 1 ? "0" + value : value;
    },

    howManyDays(bitis, baslangic) {
      let date1 = baslangic.getTime();
      let date2 = bitis.getTime();
      this.result = Math.floor((date2 - date1) / this.MS_one_day).toString()
      this.temp = ((date2 - date1) % (this.MS_one_day))
      this.hour = this.addZero(Math.floor(this.temp / this.MS_one_hour).toString())
      this.minutes = this.addZero(Math.floor(((this.temp / this.MS_one_hour) * 60) % 60).toString())
      this.seconds = this.addZero(Math.round(((((this.temp / this.MS_one_hour) * 60) % 60) * 60) % 60).toString())



    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: black;
  color: white;
  box-sizing: border-box;
}
</style>