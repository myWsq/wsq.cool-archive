import Vue from "vue";
import Day from "dayjs";

Vue.filter("date", (val: string) => {
  return Day(val).format("YYYY-MM-DD HH:mm:ss");
});
