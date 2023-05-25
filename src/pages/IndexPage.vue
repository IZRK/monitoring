<template>
  <q-page v-if="conf" class="q-ma-md">
    <div class="text-h4 kreon q-py-md">
      Server status
    </div>
    <div class="row q-col-gutter-md">
      <div v-for="(srv, name) in conf.servers" :key="name" class="col-lg-4 col-12">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="row text-h6 ">
              {{name}} ({{srv.hostname}})
              <q-space />
              <q-icon name="circle" :color="status[srv.hostname]?.ping == 'up' ? 'positive' : 'negative'" />
            </div>
            <code style="font-size:10px">{{status[srv.hostname]?.uptime}}</code>
          </q-card-section>
          <q-card-section v-if="srv.virt" class="bg-dark">
            <q-list dark>
              <q-item v-for="(virt, vm) in srv.virt" :key="vm">
                <q-item-section>{{vm}}</q-item-section>
                <q-item-section avatar>
                  <q-icon name="flag_circle" :color="status[vm]?.autostart == 'enable' ? 'positive' : 'negative'">
                    <q-tooltip>Virtual machine autostart status</q-tooltip>
                  </q-icon>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon name="circle" :color="status[virt.hostname]?.ping == 'up' ? 'positive' : 'negative'">
                    <q-tooltip>Virtual machine ping response</q-tooltip>
                  </q-icon>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon name="lan" :color="status[vm]?.virt == 'enable' ? 'positive' : 'negative'">
                    <q-tooltip>Virtual machine running status</q-tooltip>
                  </q-icon>
                </q-item-section>
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
    fetch('https://monitoring.izrk.zrc-sazu.si/index/sts').then(r => r.json()).then(r => {
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
</script>
