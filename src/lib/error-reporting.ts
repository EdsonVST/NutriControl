export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  try {
    console.error(error);
    // Optional: a global hook for integrations
    ;(window as any).__appEvents?.captureException?.(error, {
      source: 'react_error_boundary',
      route: window.location?.pathname,
      ...context,
    });
  } catch (e) {
    // swallow errors from the reporting path
  }
}
