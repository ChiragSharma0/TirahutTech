// Google Analytics 4 reports for the dashboard. Active only when GA_PROPERTY_ID and
// GOOGLE_APPLICATION_CREDENTIALS (path to a service-account JSON key) are set.
const PROPERTY = process.env.GA_PROPERTY_ID
let client

async function getClient() {
  if (!client) {
    const { BetaAnalyticsDataClient } = await import('@google-analytics/data')
    client = new BetaAnalyticsDataClient()
  }
  return client
}

const rows = (report, dims, mets) =>
  (report.rows || []).map((r) => ({
    ...Object.fromEntries(dims.map((d, i) => [d, r.dimensionValues[i].value])),
    ...Object.fromEntries(mets.map((m, i) => [m, Number(r.metricValues[i].value)])),
  }))

export async function gaReport(days) {
  if (!PROPERTY || !process.env.GOOGLE_APPLICATION_CREDENTIALS) return { configured: false }
  const ga = await getClient()
  const base = { property: `properties/${PROPERTY}`, dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }] }
  const run = async (dims, mets, extra = {}) => {
    const [report] = await ga.runReport({
      ...base, ...extra,
      dimensions: dims.map((name) => ({ name })),
      metrics: mets.map((name) => ({ name })),
    })
    return rows(report, dims, mets)
  }
  const [totals, countries, sources, pages] = await Promise.all([
    run([], ['activeUsers', 'sessions', 'screenPageViews', 'averageSessionDuration', 'bounceRate']),
    run(['country'], ['activeUsers'], { orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }], limit: 10 }),
    run(['sessionSource'], ['sessions'], { orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 10 }),
    run(['pagePath'], ['screenPageViews'], { orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 10 }),
  ])
  return { configured: true, totals: totals[0] || {}, countries, sources, pages }
}
