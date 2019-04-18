import Vue from 'vue'
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('zh-cn');
dayjs.extend(LocalizedFormat)

Vue.prototype.$day = dayjs
