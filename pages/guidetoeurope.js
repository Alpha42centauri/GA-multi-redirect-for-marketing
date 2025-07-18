
import {{ useEffect }} from 'react';
import Script from 'next/script';

export default function RedirectPage() {{
  useEffect(() => {{
    setTimeout(() => {{
      window.location.href = 'https://guidetoeurope.com/';
    }}, 100);
  }}, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-H68D88LHFJ`}
        strategy="afterInteractive"
      />
      <Script id="ga-tracking" strategy="afterInteractive">
        {{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){{dataLayer.push(arguments);}}
          gtag('js', new Date());
          gtag('config', 'G-H68D88LHFJ');
        `}}
      </Script>
      <p>Redirecting you...</p>
    </>
  );
}}
