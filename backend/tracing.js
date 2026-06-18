'use strict';

console.log("🔥 tracing.js loaded");

let sdk;

try {
  const { NodeSDK } = require('@opentelemetry/sdk-node');
  const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
  const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

  sdk = new NodeSDK({
    traceExporter: new TraceExporter(),
    instrumentations: [getNodeAutoInstrumentations()],
  });

  sdk.start();
  console.log("✅ Tracing initialized successfully");

} catch (err) {
  console.error("❌ Tracing failed to initialize:", err);
}