/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable unnecessary framework identification in HTTP responses.
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Apply security headers across all application routes.
        source: "/:path*",
        headers: [
          {
            // Prevent browsers from interpreting resources as a different MIME type.
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Prevent external iframe embedding and mitigate clickjacking.
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Preserve same-origin referrer information while limiting
            // cross-origin disclosure to the originating domain.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Disable browser capabilities not required by the website.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            // Establish a baseline CSP without restricting scripts or styles.
            // A stricter policy requires separate validation against Next.js
            // hydration, Vercel Analytics and client-side components.
            key: "Content-Security-Policy",
            value: [
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          // HSTS is managed by Vercel and is intentionally not redefined here.
        ],
      },
    ];
  },
};

export default nextConfig;
