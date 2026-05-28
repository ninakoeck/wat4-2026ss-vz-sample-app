/*instrumentation.mjs*/
import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter
} from '@opentelemetry/sdk-metrics';
import {
  defaultResource,
  resourceFromAttributes
} from '@opentelemetry/resources';
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION
} from '@opentelemetry/semantic-conventions';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';

const sdk = new NodeSDK({
  resource: defaultResource().merge(
    resourceFromAttributes({
      // TODO
    }),
  ),
  traceExporter: null, // TODO
  metricReader: null, // TODO
  instrumentations: null, // TODO
});

sdk.start();
