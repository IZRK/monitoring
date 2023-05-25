<template>
  <q-page v-if="conf" class="q-ma-md">
    <div class="row q-col-gutter-md">
      <div v-for="(srv, name) in conf.servers" :key="name" class="col-lg-4 col-12">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="row text-h6 ">
              {{name}} ({{srv.hostname}})
              <q-space />
              <q-icon name="circle" :color="status[srv.hostname]?.ping.val == 'up' ? 'positive' : 'negative'" />
            </div>
            <code style="font-size:10px">{{status[srv.hostname]?.uptime?.val}}</code>
          </q-card-section>
          <q-card-section v-if="srv.virt" class="bg-dark">
            <q-list dark>
              <q-item v-for="(virt, vm) in srv.virt" :key="vm">
                <q-item-section>{{vm}}</q-item-section>
                <q-item-section avatar>
                  <q-icon name="circle" :color="status[virt.hostname]?.ping.val == 'up' ? 'positive' : 'negative'" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    conf: null,
    status: {}
  }),
  created () {
    fetch('https://monitoring.izrk.zrc-sazu.si/index/status').then(r => r.json()).then(r => {
      this.status = r
    })
    fetch('https://monitoring.izrk.zrc-sazu.si/index/conf').then(r => r.json()).then(r => {
      this.conf = r
    })
  }
}
</script>
