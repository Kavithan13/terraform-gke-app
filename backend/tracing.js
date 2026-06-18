'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

// ✅ Create OTEL SDK
const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // ✅ This sends traces to Google Cloud Trace
    url: 'https://cloudtrace.googleapis.com/v1/traces'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

// ✅ Start tracing
sdk.start()
  .then(() => {
    console.log("Tracing initialized ✅");
  })
  .catch((error) => {
    console.error("Tracing error ❌:", error);
  });

// ✅ Graceful shutdown (best practice)
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated ✅'))

