<template>
  <q-page v-if="conf && status" class="console-page">
    <div class="console-frame">
      <section class="panel hero-panel panel--overview">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://overview</div>
        </div>
        <div class="hero-panel__mesh" />
        <div class="hero-panel__content">
          <div class="hero-panel__eyebrow">
            CENTRAL WATCH // LIVE TELEMETRY // {{ currentTimeLabel }}
          </div>
          <div class="hero-panel__headline">
            <div>
              <div class="hero-panel__title">IZRK CONTROL PANEL</div>
              <div class="hero-panel__subtitle">
                Full-spectrum infrastructure surveillance with persistent signal tracing,
                thermal telemetry, and system heartbeat auditing.
              </div>
            </div>
            <div class="hero-panel__terminal">
              <span>&gt; awaiting anomaly injection</span>
              <span class="cursor" />
            </div>
          </div>

          <div class="hero-metrics">
            <article
              v-for="metric in headlineMetrics"
              :key="metric.label"
              class="metric-tile"
              :class="`metric-tile--${metric.tone}`"
            >
              <div class="metric-tile__label">{{ metric.label }}</div>
              <div class="metric-tile__value">{{ metric.value }}</div>
              <div class="metric-tile__meta">{{ metric.meta }}</div>
            </article>
          </div>
        </div>
      </section>

      <section class="panel ribbon-panel panel--statusbar">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://statusbar</div>
        </div>
        <div class="ribbon-panel__item">
          <span class="ribbon-panel__label">Last sync</span>
          <span class="ribbon-panel__value">{{ lastUpdateLabel }}</span>
        </div>
        <div class="ribbon-panel__item">
          <span class="ribbon-panel__label">Watchdogs</span>
          <span class="ribbon-panel__value">{{ summary.onlineServers }}/{{ summary.totalServers }} hosts live</span>
        </div>
        <div class="ribbon-panel__item">
          <span class="ribbon-panel__label">Thermals</span>
          <span class="ribbon-panel__value">{{ summary.currentTemp }}</span>
        </div>
        <div class="ribbon-panel__item">
          <span class="ribbon-panel__label">Anomalies</span>
          <span class="ribbon-panel__value ribbon-panel__value--alert">{{ summary.alertCount }}</span>
        </div>
      </section>

      <section class="panel panel--servers">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://hosts/runtime-map</div>
        </div>
        <div class="panel__header">
          <div>
            <div class="panel__eyebrow">Host matrix</div>
            <h2 class="panel__title">Primary server surveillance</h2>
          </div>
          <div class="panel__badge">Active scan</div>
        </div>

        <div class="server-grid">
          <article
            v-for="server in serverCards"
            :key="server.hostname"
            class="server-card"
            :class="`server-card--${server.tone}`"
          >
            <div class="server-card__header">
              <div>
                <div class="server-card__title">{{ server.name }}</div>
                <div class="server-card__meta">{{ server.hostname }}</div>
              </div>
              <div class="server-card__status-stack">
                <div class="status-pill" :class="`status-pill--${server.pingUp ? 'up' : 'down'}`">
                  {{ server.pingUp ? 'UPLINK OK' : 'LINK LOST' }}
                  <q-tooltip>{{ server.statusTooltip }}</q-tooltip>
                </div>
                <div v-if="server.telemetryEnabled" class="status-pill" :class="`status-pill--${server.telemetry.tone}`">
                  STATUS {{ server.telemetry.label }}
                  <q-tooltip>{{ server.telemetry.tooltip }}</q-tooltip>
                </div>
              </div>
            </div>

            <div class="server-card__uptime">{{ server.uptime }}</div>
            <div v-if="server.telemetryEnabled" class="server-card__telemetry">{{ server.telemetry.summary }}</div>
            <div
              v-if="server.telemetryEnabled && server.telemetry.tone !== 'up'"
              class="server-card__alert"
              :class="`server-card__alert--${server.telemetry.tone}`"
            >
              {{ server.telemetry.notice }}
              <q-tooltip>{{ server.telemetry.tooltip }}</q-tooltip>
            </div>

            <div class="server-card__subgrid">
              <div v-if="server.virtuals.length" class="subpanel">
                <div class="subpanel__label">Virtual machines</div>
                <div class="signal-list">
                  <div v-for="vm in server.virtuals" :key="vm.name" class="signal-group">
                    <div class="signal-list__row">
                      <span class="signal-list__name">{{ vm.name }}</span>
                      <span class="signal-list__meta">{{ vm.autostart ? 'AUTO' : 'MANUAL' }}<template v-if="vm.telemetryEnabled"> • {{ vm.telemetry.shortLabel }}</template></span>
                      <span class="signal-list__markers">
                        <span class="state-dot" :class="{ 'state-dot--down': !vm.running }">
                          <q-tooltip>{{ vm.tooltip }}</q-tooltip>
                        </span>
                        <span v-if="vm.telemetryEnabled" class="state-dot" :class="`state-dot--${vm.telemetry.tone}`">
                          <q-tooltip>{{ vm.telemetry.tooltip }}</q-tooltip>
                        </span>
                      </span>
                    </div>

                    <div
                      v-for="site in vm.websites"
                      :key="`${vm.name}-${site.url}`"
                      class="signal-list__row signal-list__row--detail"
                    >
                      <span class="signal-list__name">{{ site.name }}</span>
                      <span class="signal-list__meta">{{ site.up ? 'HTTP OK' : 'HTTP FAIL' }}</span>
                      <span class="state-dot" :class="{ 'state-dot--down': !site.up }">
                        <q-tooltip>{{ site.tooltip }}</q-tooltip>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="server.websites.length" class="subpanel">
                <div class="subpanel__label">Web probes</div>
                <div class="signal-list">
                  <div v-for="site in server.websites" :key="site.url" class="signal-list__row">
                    <span class="signal-list__name">{{ site.name }}</span>
                    <span class="signal-list__meta">{{ site.up ? 'HTTP OK' : 'HTTP FAIL' }}</span>
                    <span class="state-dot" :class="{ 'state-dot--down': !site.up }">
                      <q-tooltip>{{ site.tooltip }}</q-tooltip>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="panel panel--storage">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://storage/topology</div>
        </div>
        <div class="panel__header">
          <div>
            <div class="panel__eyebrow">Storage pressure</div>
            <h2 class="panel__title">Disk free-space watch</h2>
          </div>
          <div class="panel__badge">{{ summary.diskHealthy }}/{{ summary.diskTotal || 0 }} green</div>
        </div>

        <div class="disk-clusters">
          <article
            v-for="group in diskGroups"
            :key="group.key"
            class="disk-cluster"
            :class="`disk-cluster--${group.tone}`"
          >
            <div class="disk-cluster__header">
              <div>
                <div class="disk-cluster__eyebrow">{{ group.kind }}</div>
                <div class="disk-cluster__title">{{ group.name }}</div>
                <div class="disk-cluster__meta">{{ group.hostname }} • {{ group.ip }}</div>
              </div>
              <div class="status-pill" :class="`status-pill--${group.tone}`">
                {{ group.okCount }}/{{ group.diskCount }} GREEN
                <q-tooltip>{{ group.tooltip }}</q-tooltip>
              </div>
            </div>

            <div
              v-if="group.hostNode"
              class="disk-cluster__host-strip"
              :class="`disk-cluster__host-strip--${group.hostNode.tone}`"
            >
              <div>
                <div class="disk-node__kind">{{ group.hostNode.kind }}</div>
                <div class="disk-cluster__host-meta">
                  {{ group.hostNode.hostname }}<span v-if="group.hostNode.ip"> • {{ group.hostNode.ip }}</span>
                </div>
              </div>
              <div class="disk-node__score" :class="`disk-node__score--${group.hostNode.tone}`">
                {{ group.hostNode.okCount }}/{{ group.hostNode.disks.length }}
              </div>
            </div>

            <div v-if="group.hostNode" class="disk-list disk-list--compact">
              <div
                v-for="disk in group.hostNode.disks"
                :key="`${group.hostNode.key}-${disk.label}`"
                class="disk-row"
                :class="`disk-row--${disk.tone}`"
              >
                <div class="disk-row__top">
                  <span class="disk-row__label">{{ disk.label }}</span>
                  <span class="disk-row__value">{{ disk.statusText }}</span>
                </div>
                <div class="disk-row__meta">{{ disk.detail }}</div>
                <div class="disk-row__bar">
                  <span class="disk-row__fill" :style="{ width: disk.fillWidth }" />
                </div>
                <q-tooltip>{{ disk.tooltip }}</q-tooltip>
              </div>
            </div>

            <div v-if="group.children.length" class="disk-cluster__children">
              <div class="disk-cluster__branch-label">Resident VMs</div>

              <article
                v-for="node in group.children"
                :key="node.key"
                class="disk-node disk-node--vm disk-node--compact"
                :class="`disk-node--${node.tone}`"
              >
                <div class="disk-node__header">
                  <div>
                    <div class="disk-node__kind">{{ node.kind }}</div>
                    <div class="disk-node__title">{{ node.name }}</div>
                    <div class="disk-node__meta">
                      {{ node.hostname }}<span v-if="node.ip"> • {{ node.ip }}</span>
                    </div>
                  </div>
                  <div class="disk-node__score" :class="`disk-node__score--${node.tone}`">
                    {{ node.okCount }}/{{ node.disks.length }}
                  </div>
                </div>

                <div class="disk-list disk-list--compact">
                  <div
                    v-for="disk in node.disks"
                    :key="`${node.key}-${disk.label}`"
                    class="disk-row"
                    :class="`disk-row--${disk.tone}`"
                  >
                    <div class="disk-row__top">
                      <span class="disk-row__label">{{ disk.label }}</span>
                      <span class="disk-row__value">{{ disk.statusText }}</span>
                    </div>
                    <div class="disk-row__meta">{{ disk.detail }}</div>
                    <div class="disk-row__bar">
                      <span class="disk-row__fill" :style="{ width: disk.fillWidth }" />
                    </div>
                    <q-tooltip>{{ disk.tooltip }}</q-tooltip>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section class="panel panel--network">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://network/geonetwork</div>
        </div>
        <div class="panel__header">
          <div>
            <div class="panel__eyebrow">Service integrity</div>
            <h2 class="panel__title">Geonetwork diagnostics</h2>
          </div>
          <div class="panel__badge">{{ geonetworkCards.length }} nodes</div>
        </div>

        <div class="stack-list">
          <article
            v-for="node in geonetworkCards"
            :key="node.name"
            class="stack-card"
            :class="`stack-card--${node.tone}`"
          >
            <div class="stack-card__header">
              <span>{{ node.name }}</span>
              <span>{{ node.okCount }}/{{ node.services.length }} green</span>
            </div>

            <div v-for="service in node.services" :key="service.name" class="stack-card__row">
              <span>{{ service.name }}</span>
              <span class="stack-card__message">{{ service.message }}</span>
              <span class="status-text" :class="{ 'status-text--down': !service.ok }">
                {{ service.ok ? 'OK' : 'FAIL' }}
                <q-tooltip>{{ service.tooltip }}</q-tooltip>
              </span>
            </div>
          </article>
        </div>
      </section>

      <section class="panel panel--seismo">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://archive/seismology</div>
        </div>
        <div class="panel__header">
          <div>
            <div class="panel__eyebrow">Acquisition depth</div>
            <h2 class="panel__title">Seismological station continuity</h2>
          </div>
          <div class="panel__badge">Year {{ currentYear }}</div>
        </div>

        <div class="seismo-grid">
          <article
            v-for="station in seismoCards"
            :key="station.name"
            class="seismo-card"
            :class="`seismo-card--${station.tone}`"
          >
            <div class="seismo-card__header">
              <div>
                <div class="seismo-card__title">{{ station.name }}</div>
                <div class="seismo-card__meta">{{ station.folder }}</div>
              </div>
              <div class="status-pill" :class="`status-pill--${station.tone}`">
                {{ station.online ? 'STREAMING' : 'OFFLINE' }}
                <q-tooltip>{{ station.tooltip }}</q-tooltip>
              </div>
            </div>

            <div class="seismo-card__service" :class="{ 'seismo-card__service--down': !station.serviceActive }">
              {{ station.serviceRaw }}
              <q-tooltip>{{ station.serviceTooltip }}</q-tooltip>
            </div>

            <div class="timeline">
              <span
                v-for="day in yearTimeline"
                :key="`${station.name}-${day}`"
                class="timeline__pixel"
                :class="{
                  'timeline__pixel--active': station.days.includes(day),
                  'timeline__pixel--future': day > dayOfYear
                }"
              >
                <q-tooltip>{{ date(day) }} // day {{ day }}</q-tooltip>
              </span>
            </div>
          </article>
        </div>
      </section>

      <section class="panel panel--thermal">
        <div class="panel__chrome">
          <div class="panel__lights">
            <span />
            <span />
            <span />
          </div>
          <div class="panel__chrome-label">workspace://environment/thermals</div>
        </div>
        <div class="panel__header">
          <div>
            <div class="panel__eyebrow">Environmental watch</div>
            <h2 class="panel__title">Server room thermals</h2>
          </div>
          <div class="panel__badge">{{ summary.currentTemp }}</div>
        </div>

        <div class="thermal-panel">
          <div class="thermal-panel__stats">
            <div>
              <div class="thermal-panel__label">Current</div>
              <div class="thermal-panel__value">{{ summary.currentTemp }}</div>
            </div>
            <div>
              <div class="thermal-panel__label">Peak</div>
              <div class="thermal-panel__value">{{ summary.maxTemp }}</div>
            </div>
            <div>
              <div class="thermal-panel__label">Floor</div>
              <div class="thermal-panel__value">{{ summary.minTemp }}</div>
            </div>
          </div>

          <apexchart
            height="320"
            type="line"
            :options="chartOptions"
            :series="temperatureSeries"
          />
        </div>
      </section>
    </div>
  </q-page>

  <q-page v-else class="boot-page">
    <div class="boot-sequence">
      <div class="boot-sequence__label">INITIALIZING SURVEILLANCE BUS</div>
      <div class="boot-sequence__line">$ sync --channels=status,config,thermal</div>
      <div class="boot-sequence__line">
        telemetry stream pending
        <span class="cursor" />
      </div>
      <q-spinner-grid color="primary" size="5em" />
    </div>
  </q-page>
</template>

<script>
import { addDays, format } from 'date-fns'

export default {
  name: 'IndexPage',

  data: () => ({
    clockTimer: null,
    intv: null,
    conf: null,
    status: null,
    temps: [],
    now: new Date(),
    lastUpdatedAt: null,
    chartOptions: {
      chart: {
        id: 'temps',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        background: 'transparent',
        foreColor: '#a7ffd0',
        animations: {
          easing: 'linear'
        }
      },
      colors: ['#67ffb3'],
      stroke: {
        curve: 'smooth',
        width: 2,
        lineCap: 'round'
      },
      markers: {
        size: 0,
        strokeWidth: 0,
        hover: {
          sizeOffset: 0
        }
      },
      grid: {
        borderColor: 'rgba(103, 255, 179, 0.12)',
        strokeDashArray: 4
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.35,
          opacityTo: 0.02
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        theme: 'dark',
        x: {
          format: 'dd MMM HH:mm'
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: true,
          style: {
            colors: '#76cfa3'
          }
        },
        axisBorder: {
          color: 'rgba(103, 255, 179, 0.2)'
        },
        axisTicks: {
          color: 'rgba(103, 255, 179, 0.2)'
        }
      },
      yaxis: {
        max: 30,
        min: 15,
        labels: {
          formatter: value => `${value.toFixed(0)}C`,
          style: {
            colors: '#76cfa3'
          }
        }
      }
    }
  }),

  created () {
    this.load()
    this.intv = setInterval(this.load, 60 * 1000)
    this.clockTimer = setInterval(() => {
      this.now = new Date()
    }, 1000)
  },

  beforeUnmount () {
    clearInterval(this.intv)
    clearInterval(this.clockTimer)
  },

  computed: {
    currentTimeLabel () {
      return this.formatUtc(this.now) + ' UTC'
    },

    lastUpdateLabel () {
      return this.lastUpdatedAt ? this.formatUtc(this.lastUpdatedAt) + ' UTC' : 'pending'
    },

    currentYear () {
      return new Date().getFullYear()
    },

    dayOfYear () {
      const date = new Date()
      const start = new Date(date.getFullYear(), 0, 0)
      const diff = date - start
      const oneDay = 1000 * 60 * 60 * 24
      return Math.floor(diff / oneDay)
    },

    daysInYear () {
      const year = new Date().getFullYear()
      const isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
      return isLeapYear ? 366 : 365
    },

    yearTimeline () {
      return Array.from({ length: this.daysInYear }, (_, index) => index + 1)
    },

    serverCards () {
      return Object.entries(this.conf?.servers || {}).map(([name, srv]) => {
        const hostStatus = this.status?.[srv.hostname] || {}
        const pingUp = hostStatus?.ping?.val === 'up'
        const telemetryEnabled = (srv.disk || []).length > 0
        const telemetry = telemetryEnabled ? this.telemetryStatus(hostStatus, true) : null
        const virtuals = Object.entries(srv.virt || {}).map(([vmName, virt]) => {
          const vmRuntimeStatus = this.status?.[vmName] || {}
          const vmTelemetryStatus = this.status?.[virt.hostname] || {}
          const vmTelemetryEnabled = (virt.disk || []).length > 0
          const vmStatus = {
            ...vmTelemetryStatus,
            ...vmRuntimeStatus,
            uptime: vmTelemetryStatus?.uptime || vmRuntimeStatus?.uptime,
            disk: vmTelemetryStatus?.disk || vmRuntimeStatus?.disk,
            ping: vmTelemetryStatus?.ping || vmRuntimeStatus?.ping
          }
          const websites = (virt.web || []).map(site => this.buildWebsite(site))
          return {
            name: vmName,
            autostart: vmStatus?.autostart?.val === 'enable',
            running: vmStatus?.virt?.val === 'enable' || vmStatus?.ping?.val === 'up',
            telemetryEnabled: vmTelemetryEnabled,
            telemetry: vmTelemetryEnabled ? this.telemetryStatus(vmTelemetryStatus, true) : null,
            tooltip: this.vmTooltip(vmName, vmStatus),
            websites
          }
        })
        const websites = (srv.web || []).map(site => this.buildWebsite(site))

        return {
          name,
          hostname: srv.hostname,
          pingUp,
          telemetryEnabled,
          telemetry,
          uptime: hostStatus?.uptime?.val || 'No uptime data',
          virtuals,
          websites,
          tone: !pingUp ? 'down' : (telemetryEnabled ? telemetry.tone : 'up'),
          statusTooltip: this.serverTooltip(name, srv.hostname, pingUp, telemetry, telemetryEnabled)
        }
      })
    },

    geonetworkCards () {
      return (this.conf?.geonetwork || []).map(name => {
        const services = Object.entries(this.status?.[name] || {}).map(([serviceName, serviceStatus]) => ({
          name: serviceName,
          ok: serviceStatus?.val === 'OK',
          message: this.jsonMessage(serviceStatus?.raw),
          tooltip: this.geonetworkTooltip(serviceName, serviceStatus)
        }))
        const okCount = services.filter(service => service.ok).length

        return {
          name,
          services,
          okCount,
          tone: okCount === services.length ? 'up' : 'down'
        }
      })
    },

    seismoCards () {
      return Object.entries(this.conf?.seismo || {}).map(([name, folder]) => {
        const station = this.status?.[name] || {}
        const serviceKey = `seismo${name}.service`
        const serviceState = this.status?.seizmoloska_izrk?.[serviceKey] || {}
        const days = (station?.days?.val || '')
          .split(',')
          .map(day => Number(day))
          .filter(day => Number.isFinite(day))

        const online = station?.seismo?.val === 'up'
        const serviceActive = serviceState?.val === 'active'

        return {
          name,
          folder,
          days,
          online,
          serviceActive,
          serviceRaw: serviceState?.raw || 'No service trace available',
          tone: online && serviceActive ? 'up' : 'down',
          tooltip: this.seismoTooltip(name, online, serviceActive),
          serviceTooltip: this.seismoServiceTooltip(serviceKey, serviceState)
        }
      })
    },

    diskGroups () {
      const groups = []

      Object.entries(this.conf?.servers || {}).forEach(([name, srv]) => {
        const hostDisks = (srv.disk || []).length
          ? this.buildDiskEntries(srv.disk || [], this.status?.[srv.hostname]?.disk || null)
          : []

        const children = Object.entries(srv.virt || {}).reduce((nodes, [vmName, virt]) => {
          if (!(virt.disk || []).length) {
            return nodes
          }

          const vmRow = this.status?.[virt.hostname]?.disk || this.status?.[vmName]?.disk || null
          const disks = this.buildDiskEntries(virt.disk || [], vmRow)
          nodes.push(this.buildDiskNode(`vm-${vmName}`, vmName, virt.hostname, disks, 'Guest VM', virt.ip))
          return nodes
        }, [])

        if (!hostDisks.length && !children.length) {
          return
        }

        const hostNode = hostDisks.length
          ? this.buildDiskNode(
              `host-${srv.hostname}`,
              name,
              srv.hostname,
              hostDisks,
              Object.keys(srv.virt || {}).length ? 'Hypervisor host' : 'Standalone node',
              srv.ip
          )
          : null

        const nodes = [hostNode, ...children].filter(Boolean)
        const okCount = nodes.reduce((sum, node) => sum + node.okCount, 0)
        const diskCount = nodes.reduce((sum, node) => sum + node.disks.length, 0)

        const hasDown = nodes.some(node => node.tone === 'down')
        const hasLag = !hasDown && nodes.some(node => node.tone === 'lag')

        groups.push({
          key: `group-${name}`,
          name,
          hostname: srv.hostname,
          ip: srv.ip,
          kind: Object.keys(srv.virt || {}).length ? 'Physical host' : 'Standalone equipment',
          hostNode,
          children,
          okCount,
          diskCount,
          tone: hasDown ? 'down' : hasLag ? 'lag' : 'up',
          tooltip: hasDown
            ? `${name} storage tree has disk pressure.`
            : hasLag
              ? `${name} storage tree has stale or missing disk telemetry.`
              : `${name} storage tree is within configured limits.`
        })
      })

      return groups
    },

    diskNodes () {
      return this.diskGroups.flatMap(group => [group.hostNode, ...group.children].filter(Boolean))
    },

    summary () {
      const emptySummary = {
        totalServers: 0,
        onlineServers: 0,
        websiteTotal: 0,
        websiteOnline: 0,
        vmTotal: 0,
        vmOnline: 0,
        diskTotal: 0,
        diskHealthy: 0,
        diskAlerts: 0,
        alertCount: 0,
        currentTemp: 'No data',
        maxTemp: 'No data',
        minTemp: 'No data'
      }

      try {
        const serverCards = Array.isArray(this.serverCards) ? this.serverCards : []
        const geonetworkCards = Array.isArray(this.geonetworkCards) ? this.geonetworkCards : []
        const seismoCards = Array.isArray(this.seismoCards) ? this.seismoCards : []
        const diskNodes = Array.isArray(this.diskNodes) ? this.diskNodes : []
        const totalServers = serverCards.length
        const onlineServers = serverCards.filter(server => server.pingUp).length
        const websiteTotal = serverCards.reduce((sum, server) => {
          const hostWebsites = (server.websites || []).length
          const vmWebsites = (server.virtuals || []).reduce((count, vm) => count + ((vm.websites || []).length), 0)
          return sum + hostWebsites + vmWebsites
        }, 0)
        const websiteOnline = serverCards.reduce((sum, server) => {
          const hostWebsites = (server.websites || []).filter(site => site.up).length
          const vmWebsites = (server.virtuals || []).reduce((count, vm) => {
            return count + (vm.websites || []).filter(site => site.up).length
          }, 0)
          return sum + hostWebsites + vmWebsites
        }, 0)
        const vmTotal = serverCards.reduce((sum, server) => sum + ((server.virtuals || []).length), 0)
        const vmOnline = serverCards.reduce((sum, server) => {
          return sum + (server.virtuals || []).filter(vm => vm.running).length
        }, 0)
        const hostTelemetryAlerts = serverCards.filter(server => server.pingUp && server.telemetryEnabled && server.telemetry?.tone !== 'up').length
        const vmTelemetryAlerts = serverCards.reduce((sum, server) => {
          return sum + (server.virtuals || []).filter(vm => vm.running && vm.telemetryEnabled && vm.telemetry?.tone !== 'up').length
        }, 0)
        const geonetworkAlerts = geonetworkCards.reduce((sum, node) => {
          return sum + (node.services || []).filter(service => !service.ok).length
        }, 0)
        const seismoAlerts = seismoCards.filter(station => !station.online || !station.serviceActive).length
        const diskTotal = diskNodes.reduce((sum, node) => sum + (node.disks || []).length, 0)
        const diskHealthy = diskNodes.reduce((sum, node) => sum + (node.disks || []).filter(disk => disk.ok).length, 0)
        const diskAlerts = diskTotal - diskHealthy
        const alertCount = (totalServers - onlineServers) + hostTelemetryAlerts + (websiteTotal - websiteOnline) + (vmTotal - vmOnline) + vmTelemetryAlerts + geonetworkAlerts + seismoAlerts + diskAlerts
        const temperatures = (Array.isArray(this.temps) ? this.temps : [])
          .map(item => Number(item?.avgTemp))
          .filter(value => Number.isFinite(value))
        const currentTemp = temperatures.length ? `${temperatures[temperatures.length - 1].toFixed(1)}\u00a0C` : emptySummary.currentTemp
        const maxTemp = temperatures.length ? `${Math.max(...temperatures).toFixed(1)}\u00a0C` : emptySummary.maxTemp
        const minTemp = temperatures.length ? `${Math.min(...temperatures).toFixed(1)}\u00a0C` : emptySummary.minTemp

        return {
          totalServers,
          onlineServers,
          websiteTotal,
          websiteOnline,
          vmTotal,
          vmOnline,
          diskTotal,
          diskHealthy,
          diskAlerts,
          alertCount,
          currentTemp,
          maxTemp,
          minTemp
        }
      } catch {
        return emptySummary
      }
    },

    headlineMetrics () {
      const summary = this.summary || {
        totalServers: 0,
        onlineServers: 0,
        websiteTotal: 0,
        websiteOnline: 0,
        vmTotal: 0,
        vmOnline: 0,
        diskTotal: 0,
        diskHealthy: 0,
        alertCount: 0
      }

      return [
        {
          label: 'Host uplinks',
          value: `${summary.onlineServers}/${summary.totalServers}`,
          meta: 'responsive nodes',
          tone: summary.onlineServers === summary.totalServers ? 'up' : 'down'
        },
        {
          label: 'Web probes',
          value: `${summary.websiteOnline}/${summary.websiteTotal || 0}`,
          meta: 'http sensors green',
          tone: summary.websiteOnline === summary.websiteTotal ? 'up' : 'down'
        },
        {
          label: 'Virtual machines',
          value: `${summary.vmOnline}/${summary.vmTotal || 0}`,
          meta: 'runtime heartbeat',
          tone: summary.vmOnline === summary.vmTotal ? 'up' : 'lag'
        },
        {
          label: 'Disk watch',
          value: `${summary.diskHealthy}/${summary.diskTotal || 0}`,
          meta: 'free-space sensors green',
          tone: summary.diskHealthy === summary.diskTotal ? 'up' : 'down'
        },
        {
          label: 'Active anomalies',
          value: `${summary.alertCount}`,
          meta: 'requires operator review',
          tone: summary.alertCount === 0 ? 'up' : 'down'
        }
      ]
    },

    temperatureSeries () {
      return [
        {
          name: 'Temperature',
          data: this.temps
            .map(item => [new Date(item.datetime).getTime(), Number(item.avgTemp)])
            .filter(([, value]) => Number.isFinite(value))
        }
      ]
    }
  },

  methods: {
    normalizeWebsite (entry) {
      if (typeof entry === 'string') {
        return {
          name: entry,
          url: entry,
          note: ''
        }
      }

      const url = entry?.url || entry?.name || ''

      return {
        name: entry?.name || url,
        url,
        note: entry?.note || ''
      }
    },

    buildWebsite (entry) {
      const site = this.normalizeWebsite(entry)
      const webStatus = this.status?.[site.url] || {}

      return {
        ...site,
        up: webStatus?.web?.val === 'up',
        tooltip: this.websiteTooltip(site, webStatus)
      }
    },

    normalizeDiskSpec (entry) {
      if (typeof entry === 'string') {
        return {
          label: entry,
          filesystem: entry,
          mount: entry
        }
      }

      const filesystem = entry?.filesystem || entry?.device || ''
      const mount = entry?.mount || ''
      const label = entry?.label || entry?.name || mount || filesystem

      return {
        label,
        filesystem: filesystem || label,
        mount: mount || label
      }
    },

    parseDiskRaw (raw) {
      if (!raw) {
        return {}
      }

      return raw
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
        .reduce((acc, line, index) => {
          if (index === 0 && line.toLowerCase().includes('filesystem')) {
            return acc
          }

          const parts = line.split(/\s+/, 6)
          if (parts.length < 5) {
            return acc
          }

          const [filesystem, size, used, avail, usep, mount = ''] = parts
          if (!filesystem || !size || !used || !avail || !usep) {
            return acc
          }

          acc[filesystem] = {
            size,
            used,
            avail,
            'use%': usep,
            mount
          }
          return acc
        }, {})
    },

    parseDiskStatus (statusRow) {
      if (!statusRow?.val) {
        return {}
      }

      let parsed = {}
      try {
        parsed = JSON.parse(statusRow.val)
      } catch {
        parsed = {}
      }

      const rawParsed = this.parseDiskRaw(statusRow?.raw)
      Object.entries(rawParsed).forEach(([filesystem, entry]) => {
        parsed[filesystem] = {
          ...(parsed[filesystem] || {}),
          ...entry
        }
      })

      return parsed
    },

    toBytes (value) {
      if (value === null || value === undefined) {
        return null
      }

      const match = String(value).trim().match(/^(\d+(?:\.\d+)?)([KMGTP])?B?$/i)
      if (!match) {
        return null
      }

      const amount = Number(match[1])
      const unit = (match[2] || '').toUpperCase()
      const power = { '': 0, K: 1, M: 2, G: 3, T: 4, P: 5 }[unit]
      return amount * (1024 ** power)
    },

    buildDiskEntries (specs, statusRow) {
      const statusMap = this.parseDiskStatus(statusRow)
      const diskAgeMinutes = this.minutesSince(statusRow?.ts || null)
      const staleDisk = diskAgeMinutes !== null && diskAgeMinutes > 60

      return specs.map(specEntry => {
        const spec = this.normalizeDiskSpec(specEntry)
        const match = Object.entries(statusMap).find(([filesystem, entry]) => {
          return filesystem === spec.filesystem || entry?.mount === spec.mount
        })

        if (!match) {
          return {
            label: spec.label,
            ok: false,
            tone: 'warn',
            statusText: 'NO DATA',
            detail: 'Configured disk is missing from the latest disk report.',
            fillWidth: '100%',
            tooltip: this.diskTooltip(spec.label, null, true)
          }
        }

        const [filesystem, disk] = match
        const usePct = Number(String(disk?.['use%'] || '').replace('%', ''))
        const availBytes = this.toBytes(disk?.avail)
        const lowPercent = Number.isFinite(usePct) && usePct >= 95
        const lowSpace = availBytes !== null && availBytes < 10 * 1024 ** 3
        const ok = !lowPercent && !lowSpace
        const mount = disk?.mount || spec.mount || filesystem
        const detail = staleDisk
          ? `${mount} • disk report ${this.formatAge(diskAgeMinutes)} old`
          : `${mount} • ${disk?.avail || '?'} free / ${disk?.size || '?'} total`

        return {
          label: spec.label,
          ok: ok && !staleDisk,
          tone: !ok ? 'down' : staleDisk ? 'warn' : 'up',
          statusText: staleDisk
            ? `STALE ${this.formatAge(diskAgeMinutes)}`
            : Number.isFinite(usePct)
              ? `${usePct}% used`
              : ((disk?.['use%'] && `${disk['use%']} used`) || 'N/A'),
          detail,
          fillWidth: `${Math.min(100, Math.max(8, Number.isFinite(usePct) ? usePct : 100))}%`,
          tooltip: this.diskTooltip(spec.label, {
            filesystem,
            mount,
            size: disk?.size,
            used: disk?.used,
            avail: disk?.avail,
            usePct,
            lowPercent,
            lowSpace,
            stale: staleDisk,
            ageMinutes: diskAgeMinutes
          }, false)
        }
      })
    },

    buildDiskNode (key, name, hostname, disks, kind, ip = null) {
      const okCount = disks.filter(disk => disk.ok).length
      const hasDown = disks.some(disk => disk.tone === 'down')
      const hasWarn = !hasDown && disks.some(disk => disk.tone === 'warn')

      return {
        key,
        name,
        hostname,
        ip,
        kind,
        disks,
        okCount,
        tone: hasDown ? 'down' : hasWarn ? 'lag' : 'up',
        tooltip: hasDown
          ? `${name} (${hostname}) has disk pressure.`
          : hasWarn
            ? `${name} (${hostname}) has stale or missing disk telemetry.`
            : `${name} (${hostname}) disk telemetry is within configured limits.`
      }
    },

    serverTooltip (name, hostname, pingUp, telemetry, telemetryEnabled = true) {
      if (!pingUp) {
        return `${name} (${hostname}) is not responding to ping.`
      }

      if (!telemetryEnabled) {
        return `${name} (${hostname}) is online. Update-status checks are skipped for this node.`
      }

      if (telemetry?.tone === 'down') {
        return `${name} (${hostname}) is reachable, but telemetry is stale or missing.`
      }

      if (telemetry?.tone === 'lag') {
        return `${name} (${hostname}) is reachable, but telemetry is lagging.`
      }

      return `${name} (${hostname}) is online and reporting current telemetry.`
    },

    vmTooltip (name, status) {
      const autostart = status?.autostart?.val === 'enable' ? 'Autostart enabled.' : 'Autostart disabled.'
      const running = status?.virt?.val === 'enable' || status?.ping?.val === 'up'
        ? 'Virtual machine is running.'
        : 'Virtual machine is not running.'

      return `${name}: ${running} ${autostart}`
    },

    websiteTooltip (site, status) {
      const label = site.name === site.url ? site.url : `${site.name} (${site.url})`
      const note = site.note ? ` ${site.note}.` : ''

      return status?.web?.val === 'up'
        ? `${label} responded successfully.${note}`
        : `${label} did not respond to the web check.${note}`
    },

    geonetworkTooltip (name, status) {
      const state = status?.val || 'UNKNOWN'
      const message = this.jsonMessage(status?.raw)
      return `${name}: ${state}. ${message}`
    },

    seismoTooltip (name, online, serviceActive) {
      if (online && serviceActive) {
        return `${name} is streaming and the service is active.`
      }

      if (!online && !serviceActive) {
        return `${name} is offline and the backing service is inactive.`
      }

      if (!online) {
        return `${name} is offline, although the backing service still reports active.`
      }

      return `${name} is streaming, but the backing service is not active.`
    },

    seismoServiceTooltip (serviceKey, serviceState) {
      const state = serviceState?.val || 'unknown'
      return `${serviceKey}: ${state}`
    },

    diskTooltip (label, disk, missing) {
      if (missing) {
        return `${label} is configured for monitoring, but it is missing from the latest disk report.`
      }

      if (disk?.stale) {
        return `${label} (${disk?.mount || disk?.filesystem}) is reporting disk data, but the latest disk report is stale: ${this.formatAge(disk.ageMinutes)} old.`
      }

      const reasons = []
      if (disk?.lowPercent) {
        reasons.push('usage is at or above 95%')
      }
      if (disk?.lowSpace) {
        reasons.push('free space is below 10 GB')
      }

      const suffix = reasons.length ? ` Alert: ${reasons.join(' and ')}.` : ''
      return `${label} (${disk?.mount || disk?.filesystem}): ${disk?.avail || '?'} free of ${disk?.size || '?'}, ${Number.isFinite(disk?.usePct) ? `${disk.usePct}%` : 'unknown usage'}.${suffix}`
    },

    formatUtc (date) {
      const year = date.getUTCFullYear()
      const month = String(date.getUTCMonth() + 1).padStart(2, '0')
      const day = String(date.getUTCDate()).padStart(2, '0')
      const hours = String(date.getUTCHours()).padStart(2, '0')
      const minutes = String(date.getUTCMinutes()).padStart(2, '0')
      const seconds = String(date.getUTCSeconds()).padStart(2, '0')

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    },

    jsonMessage (raw) {
      if (!raw) {
        return 'No payload'
      }

      try {
        return JSON.parse(raw).msg || raw
      } catch {
        return raw
      }
    },

    parseStatusTimestamp (value) {
      if (!value) {
        return null
      }

      const input = String(value).trim()
      const normalized = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(input)
        ? `${input.replace(' ', 'T')}Z`
        : input
      const date = new Date(normalized)

      return Number.isNaN(date.getTime()) ? null : date
    },

    minutesSince (ts) {
      const date = this.parseStatusTimestamp(ts)
      if (!date) {
        return null
      }

      const diff = this.now.getTime() - date.getTime()
      return Math.max(0, Math.floor(diff / (60 * 1000)))
    },

    formatAge (minutes) {
      if (minutes === null) {
        return 'no data'
      }

      if (minutes < 1) {
        return '<1m'
      }

      if (minutes < 60) {
        return `${minutes}m`
      }

      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60
      if (hours < 24) {
        return mins ? `${hours}h ${mins}m` : `${hours}h`
      }

      const days = Math.floor(hours / 24)
      const remHours = hours % 24
      return remHours ? `${days}d ${remHours}h` : `${days}d`
    },

    telemetryStatus (statusMap, includeDisk = false) {
      const attrs = ['uptime']
      if (includeDisk) {
        attrs.push('disk')
      }

      const details = attrs.map(attr => {
        const ts = statusMap?.[attr]?.ts || null
        const minutes = this.minutesSince(ts)
        return {
          attr,
          ts,
          minutes,
          missing: minutes === null
        }
      })

      const available = details.filter(detail => detail.minutes !== null)
      const freshest = available.length
        ? available.reduce((best, detail) => (best === null || detail.minutes < best.minutes ? detail : best), null)
        : null
      const missing = details.filter(detail => detail.missing).map(detail => detail.attr)
      const age = freshest?.minutes ?? null

      let tone = 'down'
      if (age !== null) {
        if (age <= 10) {
          tone = 'up'
        } else if (age <= 60) {
          tone = 'lag'
        }
      }

      const label = tone === 'up' ? 'LIVE' : tone === 'lag' ? 'LAGGING' : 'STALE'
      const shortLabel = tone === 'up' ? 'LIVE' : tone === 'lag' ? 'LAG' : 'STALE'
      const summary = freshest
        ? `latest ${freshest.attr} update ${this.formatAge(freshest.minutes)} old`
        : 'no uptime or disk status data'

      let notice = 'Telemetry is current.'
      if (!freshest) {
        notice = 'Missing uptime and disk telemetry.'
      } else if (tone === 'lag') {
        notice = `Latest status is lagging: ${this.formatAge(age)} old.`
      } else if (tone === 'down') {
        notice = `Latest status is stale: ${this.formatAge(age)} old.`
      } else if (missing.length) {
        notice = `Latest status is current. Missing ${missing.join(' and ')} telemetry.`
      }

      const detailSummary = details
        .map(detail => `${detail.attr}: ${detail.missing ? 'no data' : `${this.formatAge(detail.minutes)} old`}`)
        .join(' • ')
      const tooltip = `${detailSummary}. ${
        tone === 'up'
          ? 'The freshest status update is 10 minutes old or newer.'
          : tone === 'lag'
            ? 'The freshest status update is between 11 and 60 minutes old.'
            : 'No recent uptime or disk status update was found in the last 60 minutes.'
      }`

      return {
        tone,
        label,
        shortLabel,
        summary,
        notice,
        tooltip,
        age,
        freshestAttr: freshest?.attr || null,
        missing,
        details
      }
    },

    lag (ts) {
      const minutes = this.minutesSince(ts)
      return minutes !== null && minutes > 10 && minutes <= 60
    },

    date (day) {
      let date = new Date(new Date().getFullYear(), 0, 0)
      date = addDays(date, day)
      return format(date, 'yyyy-MM-dd')
    },

    async load () {
      const endpoints = [
        {
          key: 'status',
          url: 'https://monitoring.izrk.zrc-sazu.si/index/status',
          title: 'Unable to load status'
        },
        {
          key: 'conf',
          url: 'https://monitoring.izrk.zrc-sazu.si/index/conf',
          title: 'Unable to load configuration file'
        },
        {
          key: 'temps',
          url: 'https://monitoring.izrk.zrc-sazu.si/index/temps',
          title: 'Unable to load temperature data'
        }
      ]

      const results = await Promise.allSettled(endpoints.map(item => fetch(item.url).then(response => response.json())))

      results.forEach((result, index) => {
        const endpoint = endpoints[index]

        if (result.status === 'fulfilled') {
          this[endpoint.key] = result.value
          this.lastUpdatedAt = new Date()
          return
        }

        this.$q.dialog({
          title: endpoint.title,
          message: result.reason?.message || 'Unknown network error'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.console-page,
.boot-page {
  min-height: calc(100vh - 84px);
}

.console-page {
  background:
    radial-gradient(circle at top left, rgba(103, 255, 179, 0.08), transparent 28%),
    radial-gradient(circle at bottom right, rgba(103, 255, 179, 0.08), transparent 24%),
    linear-gradient(180deg, #071014 0%, #05080d 100%);
}

.console-frame {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-areas:
    'overview overview overview overview overview overview overview overview thermal thermal thermal thermal'
    'statusbar statusbar statusbar statusbar statusbar statusbar statusbar statusbar statusbar statusbar statusbar statusbar'
    'servers servers servers servers servers servers servers storage storage storage storage storage'
    'network network network network network network network storage storage storage storage storage'
    'seismo seismo seismo seismo seismo seismo seismo seismo seismo seismo seismo seismo';
  gap: 0.85rem;
  max-width: 1780px;
  margin: 0 auto;
  padding: 1rem;
}

.panel {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(103, 255, 179, 0.16);
  border-radius: 0;
  padding: 2.9rem 1rem 1rem;
  background:
    linear-gradient(180deg, rgba(10, 22, 18, 0.96), rgba(5, 11, 9, 0.97)),
    rgba(8, 13, 20, 0.94);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 22px 44px rgba(0, 0, 0, 0.34);
}

.panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 16%, transparent 82%, rgba(103, 255, 179, 0.04));
  opacity: 1;
  pointer-events: none;
}

.panel--wide {
  grid-column: 1 / -1;
}

.panel--overview {
  grid-area: overview;
}

.panel--statusbar {
  grid-area: statusbar;
  min-height: 116px;
  padding: 0 1rem 0.8rem;
}

.panel--servers {
  grid-area: servers;
}

.panel--storage {
  grid-area: storage;
}

.panel--network {
  grid-area: network;
}

.panel--seismo {
  grid-area: seismo;
}

.panel--thermal {
  grid-area: thermal;
}

.panel__chrome {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  margin: 0;
  padding: 0.62rem 0.85rem;
  border-bottom: 1px solid rgba(103, 255, 179, 0.14);
  border-radius: 0;
  background: linear-gradient(180deg, rgba(17, 33, 26, 0.95), rgba(10, 18, 14, 0.94));
}

.panel__lights {
  display: inline-flex;
  gap: 0.38rem;
}

.panel__lights span {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.panel__lights span:nth-child(1) {
  background: #ff6b6b;
}

.panel__lights span:nth-child(2) {
  background: #f7c95c;
}

.panel__lights span:nth-child(3) {
  background: #57d487;
}

.panel__chrome-label {
  font-size: 0.72rem;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  color: rgba(176, 255, 213, 0.7);
}

.panel__header,
.hero-panel__headline,
.server-card__header,
.stack-card__header,
.seismo-card__header,
.ribbon-panel,
.thermal-panel__stats {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
}

.panel__eyebrow,
.panel__badge,
.ribbon-panel__label,
.metric-tile__label,
.subpanel__label,
.thermal-panel__label,
.hero-panel__eyebrow,
.boot-sequence__label {
  font-size: 0.72rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  color: rgba(176, 205, 255, 0.72);
}

.panel__title,
.hero-panel__title {
  margin: 0.45rem 0 0;
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.15rem, 2vw, 1.8rem);
  font-weight: 700;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  color: #effff6;
}

.panel__badge,
.status-pill {
  align-self: flex-start;
  padding: 0.45rem 0.8rem;
  border: 1px solid rgba(103, 255, 179, 0.16);
  border-radius: 0;
  background: rgba(9, 19, 14, 0.84);
  color: rgba(230, 255, 243, 0.88);
}

.hero-panel {
  min-height: 330px;
  padding: 0;
}

.hero-panel__mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right, rgba(103, 255, 179, 0.18), transparent 24%),
    linear-gradient(transparent 49%, rgba(103, 255, 179, 0.08) 50%, transparent 51%),
    linear-gradient(90deg, transparent 49%, rgba(103, 255, 179, 0.05) 50%, transparent 51%);
  background-size: auto, 100% 26px, 26px 100%;
  opacity: 0.75;
  animation: sweep 16s linear infinite;
}

.hero-panel__content {
  position: relative;
  z-index: 1;
  padding: 3.15rem 1.2rem 1.2rem;
}

.hero-panel__subtitle {
  max-width: 38rem;
  margin-top: 0.8rem;
  line-height: 1.65;
  color: rgba(210, 227, 252, 0.78);
}

.hero-panel__terminal {
  min-width: 220px;
  align-self: flex-end;
  padding: 1rem;
  border: 1px solid rgba(103, 255, 179, 0.14);
  border-radius: 0;
  background: rgba(7, 12, 18, 0.88);
  color: #b4ffde;
  box-shadow: inset 0 0 24px rgba(103, 255, 179, 0.05);
}

.cursor {
  display: inline-block;
  width: 0.7rem;
  height: 1rem;
  margin-left: 0.35rem;
  vertical-align: middle;
  background: #67ffb3;
  box-shadow: 0 0 12px rgba(103, 255, 179, 0.72);
  animation: blink 1s steps(1) infinite;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.metric-tile {
  position: relative;
  padding: 0.85rem;
  border-radius: 0;
  border: 1px solid rgba(103, 255, 179, 0.12);
  background: linear-gradient(180deg, rgba(9, 19, 15, 0.9), rgba(8, 14, 11, 0.9));
  animation: float 8s ease-in-out infinite;
}

.metric-tile:nth-child(2) {
  animation-delay: 0.6s;
}

.metric-tile:nth-child(3) {
  animation-delay: 1.2s;
}

.metric-tile:nth-child(4) {
  animation-delay: 1.8s;
}

.metric-tile:nth-child(5) {
  animation-delay: 2.4s;
}

.metric-tile__value {
  margin-top: 0.55rem;
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #effff6;
}

.metric-tile__meta {
  margin-top: 0.35rem;
  color: rgba(196, 255, 224, 0.7);
}

.metric-tile--up {
  box-shadow: inset 0 0 20px rgba(103, 255, 179, 0.08);
}

.metric-tile--lag {
  border-color: rgba(255, 191, 71, 0.3);
}

.metric-tile--down {
  border-color: rgba(255, 95, 95, 0.35);
  background: linear-gradient(180deg, rgba(28, 10, 10, 0.92), rgba(18, 8, 8, 0.9));
  box-shadow: inset 0 0 24px rgba(255, 95, 95, 0.08);
}

.metric-tile--down .metric-tile__label,
.metric-tile--down .metric-tile__meta {
  color: rgba(255, 186, 186, 0.92);
}

.metric-tile--down .metric-tile__value {
  color: #ff7e7e;
  text-shadow: 0 0 18px rgba(255, 95, 95, 0.2);
}

.ribbon-panel {
  align-items: start;
  align-content: start;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: min-content;
  row-gap: 0.75rem;
  padding-top: 0;
  padding-bottom: 0;
}

.panel--statusbar .panel__chrome {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  grid-column: 1 / -1;
  margin: 0 -1rem 0;
}

.panel--statusbar .ribbon-panel__item {
  align-content: start;
  padding-top: 0.15rem;
}

.ribbon-panel__item {
  display: grid;
  gap: 0.35rem;
  min-width: 0;
  padding: 0.2rem 0.35rem;
  border-right: 1px solid rgba(103, 255, 179, 0.1);
}

.ribbon-panel__item:last-child {
  border-right: 0;
}

.ribbon-panel__value {
  color: #effff6;
}

.ribbon-panel__value--alert {
  color: #ff8e8e;
}

.server-grid,
.seismo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.8rem;
  margin-top: 0.8rem;
}

.server-card,
.stack-card,
.seismo-card,
.subpanel,
.disk-cluster,
.disk-node {
  position: relative;
  border: 1px solid rgba(103, 255, 179, 0.12);
  border-radius: 0;
  background: rgba(10, 16, 23, 0.88);
}

.server-card,
.stack-card,
.seismo-card,
.disk-cluster,
.disk-node {
  padding: 0.9rem;
}

.server-card__title,
.disk-cluster__title,
.disk-node__title,
.seismo-card__title {
  font-size: 1rem;
  color: #effff6;
}

.server-card__meta,
.disk-cluster__meta,
.disk-node__meta,
.seismo-card__meta {
  margin-top: 0.3rem;
  font-size: 0.78rem;
  color: rgba(196, 255, 224, 0.68);
}

.server-card__uptime {
  margin-top: 1rem;
  color: #67ffb3;
}

.server-card__status-stack {
  display: grid;
  gap: 0.3rem;
  justify-items: end;
}

.server-card__telemetry {
  margin-top: 0.45rem;
  color: rgba(196, 255, 224, 0.68);
  font-size: 0.76rem;
}

.server-card__alert {
  margin-top: 0.7rem;
  color: #ffbf47;
}

.server-card__alert--down {
  color: #ff8e8e;
}

.server-card__subgrid {
  display: grid;
  gap: 0.65rem;
  margin-top: 0.8rem;
}

.disk-clusters {
  display: grid;
  gap: 0.5rem;
  margin-top: 0.65rem;
}

.disk-cluster {
  display: grid;
  gap: 0.45rem;
  background:
    linear-gradient(180deg, rgba(13, 22, 31, 0.96), rgba(8, 14, 20, 0.97)),
    rgba(8, 14, 20, 0.96);
}

.disk-cluster__header,
.disk-node__header {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  align-items: flex-start;
}

.disk-cluster__eyebrow,
.disk-node__kind {
  font-size: 0.7rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  color: rgba(118, 207, 163, 0.7);
}

.disk-cluster__host-strip {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.55rem;
  padding: 0.28rem 0.45rem;
  border: 1px solid rgba(103, 255, 179, 0.12);
  background: rgba(9, 17, 14, 0.78);
}

.disk-cluster__host-strip--lag {
  border-color: rgba(255, 191, 71, 0.22);
}

.disk-cluster__host-strip--down {
  border-color: rgba(255, 95, 95, 0.24);
}

.disk-cluster__host-meta {
  margin-top: 0.1rem;
  font-size: 0.68rem;
  color: rgba(196, 255, 224, 0.62);
}

.disk-cluster__children {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem 0.45rem;
  margin-left: 0.65rem;
  padding-left: 0.65rem;
}

.disk-cluster__children::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 1px;
  background: linear-gradient(180deg, rgba(103, 255, 179, 0.28), rgba(103, 255, 179, 0.08));
}

.disk-cluster__branch-label {
  position: relative;
  grid-column: 1 / -1;
  padding-left: 0.15rem;
  font-size: 0.6rem;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  color: rgba(118, 207, 163, 0.66);
}

.disk-node {
  position: relative;
  overflow: hidden;
  background: rgba(12, 19, 27, 0.86);
}

.disk-node--host {
  border-color: rgba(103, 255, 179, 0.16);
}

.disk-node--vm::before {
  content: '';
  position: absolute;
  left: -0.8rem;
  top: 1.05rem;
  width: 0.7rem;
  height: 1px;
  background: rgba(103, 255, 179, 0.22);
}

.disk-node__score {
  align-self: flex-start;
  padding: 0.16rem 0.36rem;
  border: 1px solid rgba(103, 255, 179, 0.14);
  color: #effff6;
  font-family: 'Orbitron', monospace;
  font-size: 0.62rem;
  background: rgba(6, 14, 10, 0.82);
}

.disk-node--down .disk-node__score {
  border-color: rgba(255, 95, 95, 0.24);
  color: #ffb0b0;
}

.disk-node--lag .disk-node__score,
.disk-node__score--lag {
  border-color: rgba(255, 191, 71, 0.24);
  color: #ffcf73;
}

.disk-node__score--down {
  border-color: rgba(255, 95, 95, 0.24);
  color: #ffb0b0;
}

.disk-list {
  display: grid;
  gap: 0.65rem;
  margin-top: 0.8rem;
}

.disk-list--compact {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.28rem 0.32rem;
  margin-top: 0.35rem;
}

.disk-node--compact {
  padding: 0.5rem 0.55rem;
}

.disk-row {
  padding: 0.42rem 0.48rem;
  border: 1px solid rgba(103, 255, 179, 0.1);
  border-radius: 0;
  background: rgba(9, 16, 22, 0.82);
}

.disk-row--down {
  border-color: rgba(255, 95, 95, 0.28);
}

.disk-row--warn {
  border-color: rgba(255, 191, 71, 0.3);
}

.disk-node--down {
  border-color: rgba(255, 95, 95, 0.24);
}

.disk-node--lag {
  border-color: rgba(255, 191, 71, 0.22);
}

.disk-row__top {
  display: flex;
  justify-content: space-between;
  gap: 0.35rem;
  align-items: baseline;
}

.disk-row__label,
.disk-row__value {
  color: #effff6;
  font-size: 0.72rem;
}

.disk-row__value {
  font-family: 'Orbitron', monospace;
  font-size: 0.68rem;
}

.disk-row--warn .disk-row__value {
  color: #ffcf73;
}

.disk-row__meta {
  margin-top: 0.16rem;
  color: rgba(196, 255, 224, 0.68);
  font-size: 0.64rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.disk-row__bar {
  height: 0.22rem;
  margin-top: 0.32rem;
  background: rgba(255, 255, 255, 0.06);
}

.disk-row__fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #67ffb3, #baffd8);
  box-shadow: 0 0 10px rgba(103, 255, 179, 0.35);
}

.disk-row--down .disk-row__fill {
  background: linear-gradient(90deg, #ff8e8e, #ff5f5f);
  box-shadow: 0 0 10px rgba(255, 95, 95, 0.35);
}

.disk-row--warn .disk-row__fill {
  background: linear-gradient(90deg, #ffd36a, #ffbf47);
  box-shadow: 0 0 10px rgba(255, 191, 71, 0.3);
}

.subpanel {
  padding: 0.75rem;
  border-radius: 0;
  background: rgba(12, 19, 27, 0.82);
}

.signal-list {
  display: grid;
  gap: 0.55rem;
  margin-top: 0.7rem;
}

.signal-group {
  display: grid;
  gap: 0.35rem;
}

.signal-list__row,
.stack-card__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 0.6rem;
  align-items: center;
}

.signal-list__row--detail {
  padding-left: 0.9rem;
  font-size: 0.84rem;
  opacity: 0.88;
}

.signal-list__name,
.stack-card__message {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.signal-list__meta,
.status-text {
  color: rgba(196, 255, 224, 0.64);
}

.signal-list__markers {
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;
}

.state-dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #67ffb3;
  box-shadow: 0 0 14px rgba(103, 255, 179, 0.65);
}

.state-dot--lag {
  background: #ffbf47;
  box-shadow: 0 0 14px rgba(255, 191, 71, 0.45);
}

.status-text--down {
  color: #ff8e8e;
}

.state-dot--down {
  background: #ff5f5f;
  box-shadow: 0 0 14px rgba(255, 95, 95, 0.65);
}

.status-pill--up,
.server-card--up,
.disk-cluster--up,
.seismo-card--up,
.stack-card--up {
  border-color: rgba(103, 255, 179, 0.2);
}

.status-pill--lag,
.server-card--lag,
.disk-cluster--lag {
  border-color: rgba(255, 191, 71, 0.32);
  color: #ffcf73;
}

.status-pill--down,
.server-card--down,
.disk-cluster--down,
.seismo-card--down,
.stack-card--down {
  border-color: rgba(255, 95, 95, 0.3);
  color: #ff9f9f;
}

.stack-list {
  display: grid;
  gap: 0.75rem;
  margin-top: 0.8rem;
}

.stack-card__header {
  margin-bottom: 0.8rem;
  color: #effff6;
}

.stack-card__row + .stack-card__row {
  margin-top: 0.7rem;
  padding-top: 0.7rem;
  border-top: 1px solid rgba(103, 255, 179, 0.08);
}

.seismo-card__service {
  margin-top: 0.75rem;
  padding: 0.65rem;
  border-radius: 0;
  background: rgba(7, 16, 12, 0.86);
  color: #7cffc4;
  white-space: pre-wrap;
  font-size: 0.54rem;
  line-height: 1.2;
}

.seismo-card__service--down {
  color: #ff9f9f;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(36, minmax(0, 1fr));
  gap: 0.14rem;
  margin-top: 0.75rem;
}

.timeline__pixel {
  aspect-ratio: 1;
  border-radius: 0;
  background: rgba(255, 95, 95, 0.5);
  box-shadow: 0 0 8px rgba(255, 95, 95, 0.15);
}

.timeline__pixel--active {
  background: #67ffb3;
  box-shadow: 0 0 10px rgba(103, 255, 179, 0.45);
}

.timeline__pixel--future {
  background: rgba(168, 198, 181, 0.14);
  box-shadow: none;
}

.thermal-panel {
  margin-top: 1rem;
}

.thermal-panel__stats {
  margin-bottom: 1rem;
}

.thermal-panel__value {
  margin-top: 0.35rem;
  font-size: 1.25rem;
  color: #effff6;
  white-space: nowrap;
}

.panel--thermal .panel__badge {
  white-space: nowrap;
}

.panel--storage .panel__badge,
.panel--storage .status-pill {
  padding: 0.26rem 0.45rem;
  font-size: 0.66rem;
}

:deep(.apexcharts-svg) {
  overflow: visible;
}

:deep(.apexcharts-line-series .apexcharts-series path),
:deep(.apexcharts-line) {
  stroke: #7dffcb !important;
  stroke-width: 2px !important;
  filter: drop-shadow(0 0 8px rgba(103, 255, 179, 0.45));
}

:deep(.apexcharts-marker) {
  opacity: 0 !important;
}

:deep(.apexcharts-area) {
  fill-opacity: 0.14 !important;
}

.boot-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.boot-sequence {
  width: min(100%, 540px);
  padding: 1.5rem;
  border: 1px solid rgba(103, 255, 179, 0.16);
  border-radius: 0;
  background: rgba(5, 14, 10, 0.92);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.boot-sequence__line {
  margin-top: 0.9rem;
  color: rgba(196, 255, 224, 0.82);
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }

  50%, 100% {
    opacity: 0;
  }
}

@keyframes sweep {
  from {
    transform: translateY(-2%);
  }

  50% {
    transform: translateY(2%);
  }

  to {
    transform: translateY(-2%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

@media (min-width: 1101px) {
  .panel--overview {
    min-height: 360px;
  }

  .panel--thermal {
    min-height: 360px;
  }

  .panel--servers {
    min-height: 770px;
  }

  .panel--storage,
  .panel--network {
    min-height: 376px;
  }

  .panel--seismo {
    min-height: 470px;
  }

  .server-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .seismo-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1100px) {
  .console-frame {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }

  .panel--overview,
  .panel--statusbar,
  .panel--servers,
  .panel--storage,
  .panel--network,
  .panel--seismo,
  .panel--thermal {
    grid-area: auto;
  }

  .hero-metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .console-page,
  .boot-page {
    min-height: calc(100vh - 116px);
  }

  .console-frame {
    padding: 1rem;
  }

  .panel__chrome,
  .panel__header,
  .hero-panel__headline,
  .ribbon-panel,
  .thermal-panel__stats {
    flex-direction: column;
  }

  .ribbon-panel {
    grid-template-columns: 1fr;
  }

  .ribbon-panel__item {
    border-right: 0;
    border-bottom: 1px solid rgba(151, 191, 255, 0.1);
    padding-left: 0;
    padding-right: 0;
  }

  .ribbon-panel__item:last-child {
    border-bottom: 0;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .disk-cluster__children {
    grid-template-columns: 1fr;
    margin-left: 0.65rem;
    padding-left: 0.75rem;
  }

  .disk-node--vm::before {
    left: -0.75rem;
    width: 0.65rem;
  }

  .timeline {
    grid-template-columns: repeat(24, minmax(0, 1fr));
    gap: 0.14rem;
  }

  .disk-list--compact {
    grid-template-columns: 1fr;
  }

  .hero-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
