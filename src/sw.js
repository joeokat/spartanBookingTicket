import { build, files, version } from "$service-worker";

const worker = self;
const STATIC_CACHE_NAME = `cache${version}`;
const APP_CACHE_NAME = `offline${version}`;

// hard-coded list of app routes we want to preemptively cache
const routes = ["/"];

// hard-coded list of other assets necessary for page load outside our domain
const customAssets = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap",
  "https://unpkg.com/ress/dist/ress.min.css",
  "https://fonts.gstatic.com/s/inter/v11/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
];
