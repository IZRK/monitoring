<template>
  <q-page v-if="conf" class="q-ma-md">
    <div class="text-h4 kreon q-py-md">
      Server status
    </div>
    <div class="row q-col-gutter-md">
      <div v-for="(srv, name) in conf.servers" :key="name" class="col-lg-4 col-12">
        <q-card>
          <q-card-section :class="status[srv.hostname]?.ping?.val == 'up' ? 'bg-primary text-white' : 'bg-negative'">
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
              <q-item v-for="(virt, vm) in srv.virt" :key="vm" :class="status[virt.hostname]?.ping?.val == 'up' ? 'bg-positive' : 'bg-negative'">
                <q-item-section>{{vm}}</q-item-section>
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
                <q-item-section>{{site}}</q-item-section>
              </q-item>
            </q-list>
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
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    intv: false,
    conf: null,
    status: {},
    temps: [],
    chartOptions: {
      chart: {
        id: 'temps'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        max: 40,
        min: 0
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
  methods: {
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
    }
  }
}
</script>
