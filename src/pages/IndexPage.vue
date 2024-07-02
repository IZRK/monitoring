<template>
  <q-page v-if="conf && status" class="q-ma-md">
    <div class="text-h4 kreon q-py-md">
      Server status
    </div>
    <div class="row q-col-gutter-md">
      <div v-for="(srv, name) in conf.servers" :key="name" class="col-lg-4 col-12">
        <q-card class="overflow-hidden">
          <q-card-section :class="status[srv.hostname]?.ping?.val == 'up' ?  (lag(status[srv.hostname]?.uptime?.ts) ? 'bg-warning' : 'bg-primary text-white') : 'bg-negative'">
            <div class="row text-h6 ">
              {{name}} ({{srv.hostname}})
              <q-space />
              <q-icon :name="status[srv.hostname]?.ping?.val == 'up' ? 'check' : 'cancel'" />
            </div>
            <code style="font-size:10px">{{status[srv.hostname]?.uptime?.val}}</code>
          </q-card-section>
          <q-card-section v-if="srv.virt" class="q-pa-none">
            <div class="q-px-md q-py-sm text-h6 kreon text-white bg-dark">
              Virtual machines
            </div>
            <q-list>
              <q-item v-for="(virt, vm) in srv.virt" :key="vm" :class="status[virt.hostname]?.ping?.val == 'up' ? (lag(status[vm]?.virt?.ts) ? 'bg-warning' : 'bg-positive') : 'bg-negative'">
                <q-item-section class="overflow-hidden">{{vm}}</q-item-section>
                <q-item-section avatar>
                  <q-icon name="flag_circle" v-if="status[vm]?.autostart?.val == 'enable'">
                    <q-tooltip>Virtual machine is set to autostart</q-tooltip>
                  </q-icon>
                  <q-icon name="running_with_errors" color="warning" v-else>
                    <q-tooltip>Virtual is not marked as autostarted!</q-tooltip>
                  </q-icon>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon name="check" v-if="status[vm]?.virt?.val == 'enable'">
                    <q-tooltip>Virtual machine is running</q-tooltip>
                  </q-icon>
                  <q-icon name="cancel" color="warning" v-else>
                    <q-tooltip>Virtual machine is not running!</q-tooltip>
                  </q-icon>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-section v-if="srv.web" class="q-pa-none">
            <div class="q-px-md q-py-sm text-h6 kreon text-white bg-dark">
              Websites
            </div>
            <q-list>
              <q-item v-for="site in srv.web" :key="site" :class="status[site]?.web?.val == 'up' ? 'bg-positive' : 'bg-negative'">
                <q-item-section class="overflow-hidden">{{site}}</q-item-section>
                <q-item-section avatar>
                  <q-icon name="check" v-if="status[site]?.web?.val == 'up'">
                    <q-tooltip>Website is up</q-tooltip>
                  </q-icon>
                  <q-icon name="cancel" color="warning" v-else>
                    <q-tooltip>Website is down!</q-tooltip>
                  </q-icon>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="text-h4 kreon q-py-md">
      Geonetwork instances
    </div>
    <div class="row q-col-gutter-md">
      <div v-for="gn in conf.geonetwork" :key="gn" class="col-lg-4 col-12">
        <q-card class="overflow-hidden">
          <q-card-section class="bg-primary text-white">
            <div class="row text-h6 ">
              {{gn}}
            </div>
          </q-card-section>
          <q-list v-for="(status, service) in status[gn]" :key="service">
            <q-item :class="status?.val == 'OK' ? 'bg-positive' : 'bg-negative'">
              <q-item-section class="overflow-hidden">
                {{service}}
                <span class="text-caption">{{json(status.raw).msg}}</span>
              </q-item-section>
              <q-icon :name="status.val == 'OK' ? 'check' : 'cancel'" v-if="status.val == 'OK'">
                <q-tooltip>{{status.val}}</q-tooltip>
              </q-icon>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
    <div class="text-h4 kreon q-py-md">
      Seismological stations
    </div>
    <div class="row q-col-gutter-md">
      <div v-for="(folder, seismo) in conf.seismo" :key="seismo" class="col-lg-4 col-12">
        <q-card class="overflow-hidden">
          <q-card-section :class="status[seismo]?.seismo?.val == 'up' ? 'bg-primary text-white' : 'bg-negative'">
            <div class="row text-h6 ">
              {{seismo}} ({{folder}})
              <q-space />
              <q-icon :name="status[seismo]?.seismo?.val == 'up' ? 'check' : 'cancel'" />
            </div>
          </q-card-section>
          <q-card-section :class="['pre', status.seizmoloska_izrk[`seizmoloska${seismo}.service`]?.val == 'active' ? 'bg-positive' : 'bg-negative']">
            {{status.seizmoloska_izrk[`seizmoloska${seismo}.service`]?.raw}}
          </q-card-section>
          <q-card-section style="letter-spacing: -3px;font-size:20px">
            <span v-for="day in daysInYear" :key="day" :class="{future: day > dayOfYear, 'text-positive': containsDay(seismo, day), 'text-negative': !containsDay(seismo, day)}">■ <q-tooltip>{{date(day)}} ({{day}})</q-tooltip></span>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="text-h4 kreon q-py-md">
      Server room temperature
      <span v-if="temps.length > 0" class="text-h6">
        ({{temps[temps.length - 1].avgTemp }} °C current)
      </span>
    </div>
    <apexchart height="350" type="line" :options="chartOptions" :series="[{ name: 'Temperature', data: temps.map(t => [new Date(t.datetime).getTime(), t.avgTemp]) }]" />
  </q-page>
  <q-page v-else class="flex flex-center">
    <q-spinner-grid
      color="primary"
      size="10em"
    />
  </q-page>
</template>

<script>
import { addDays, format } from 'date-fns'
export default {
  name: 'IndexPage',
  data: () => ({
    intv: false,
    conf: null,
    status: null,
    temps: [],
    chartOptions: {
      chart: {
        id: 'temps'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        max: 30,
        min: 15
      }
    }
  }),
  created () {
    this.load()
    this.intv = setInterval(this.load, 60 * 1000)
  },
  beforeUnmount () {
    clearInterval(this.intv)
  },
  computed: {
    dayOfYear () {
      const date = new Date()
      const start = new Date(date.getFullYear(), 0, 0)
      const diff = date - start
      const oneDay = 1000 * 60 * 60 * 24
      const dayOfYear = Math.floor(diff / oneDay)
      return dayOfYear
    },
    daysInYear () {
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const isLeapYear = ((currentYear % 4 === 0) && (currentYear % 100 !== 0)) || (currentYear % 400 === 0)
      const daysInYear = isLeapYear ? 366 : 365

      return daysInYear
    }
  },
  methods: {
    json (j) {
      return JSON.parse(j)
    },
    lag (ts) {
      const oneHourInMilliseconds = 60 * 60 * 1000
      const givenTimestamp = new Date(ts)
      const currentTime = new Date()

      return (currentTime - givenTimestamp) > oneHourInMilliseconds
    },
    date (day) {
      let date = new Date(new Date().getFullYear(), 0, 0)
      date = addDays(date, day)
      return format(date, 'yyyy-MM-dd')
    },
    load () {
      fetch('https://monitoring.izrk.zrc-sazu.si/index/status').then(r => r.json()).then(r => {
        this.status = r
      }).catch(e => {
        this.$q.dialog({ title: 'Unable to load status', message: e.message })
      })
      fetch('https://monitoring.izrk.zrc-sazu.si/index/conf').then(r => r.json()).then(r => {
        this.conf = r
      }).catch(e => {
        this.$q.dialog({ title: 'Unable to load configuration file', message: e.message })
      })
      fetch('https://monitoring.izrk.zrc-sazu.si/index/temps').then(r => r.json()).then(r => {
        this.temps = r
      }).catch(e => {
        this.$q.dialog({ title: 'Unable to load temperature data', message: e.message })
      })
    },
    containsDay (seismo, day) {
      const days = this.status[seismo]?.days?.val.split(',').map(d => d * 1)
      return days.includes(day)
    }
  }
}
</script>

<style scoped lang="scss">
.future {
  color: #eee !important;;
}
.pre {
  white-space: pre-wrap;
  font-size: 10px
}
</style>
