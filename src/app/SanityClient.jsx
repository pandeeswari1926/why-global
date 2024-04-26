import { createClient } from "@sanity/client";

export default createClient({
    projectId:"gtdkui4o",
    dataset: 'production',
    ignoreBrowserTokenWarning: true,
    useCdn:true,
    apiVersion:"2024-04-24"
})