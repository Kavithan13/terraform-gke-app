'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

try {
  const sdk = new NodeSDK({
    instrumentations: [getNodeAutoInstrumentations()],
  });

  sdk.start()
    .then(() => {
      console.log("Tracing initialized ✅");
    })
    .catch((err) => {
      console.error("Tracing failed (non-blocking) ❌", err);
    });

} catch (error) {
  console.error("Tracing setup error (ignored) ❌", error);
}