'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

const sdk = new NodeSDK({
  traceExporter: new TraceExporter(), // ✅ GCP exporter
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start()
  .then(() => {
    console.log("Tracing initialized ✅");
  })
  .catch((err) => {
    console.error("Tracing error ❌", err);
  });