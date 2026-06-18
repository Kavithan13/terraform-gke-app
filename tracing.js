'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'https://cloudtrace.googleapis.com/v1/traces'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start()
  .then(() => console.log("Tracing initialized ✅"))
  .catch((error) => console.error("Tracing error ❌", error));

