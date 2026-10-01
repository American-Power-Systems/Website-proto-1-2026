import type { HelmetOptions } from "helmet";

export function securityOptions(isProduction: boolean): HelmetOptions {
  return {
    // Vite injects development scripts and uses WebSockets.
    // Production keeps the enforced policy and same-origin framing protection.
    contentSecurityPolicy: isProduction
      ? {
          directives: {
            scriptSrc: ["'self'", "https://platform.linkedin.com", "https://badges.linkedin.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
            imgSrc: ["'self'", "data:", "https://media.licdn.com", "https://www.linkedin.com"],
            connectSrc: ["'self'", "https://www.linkedin.com", "https://badges.linkedin.com"],
            frameSrc: ["https://www.google.com", "https://maps.google.com", "https://www.linkedin.com", "https://badges.linkedin.com"],
          },
        }
      : false,
    strictTransportSecurity: isProduction,
  };
}
