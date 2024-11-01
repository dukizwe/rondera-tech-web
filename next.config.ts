import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async headers() {
      return [
         {
            source: "/.well-known/assetlinks.json",
            headers: [
               {
                  key: 'x-custom-header',
                  value: 'my custom header value',
                },
                {
                   key: "content-type",
                   value: "application/json"
                },
            ]
         }
      ]
   }
  /* config options here */
};

export default nextConfig;
