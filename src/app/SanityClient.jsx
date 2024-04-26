import { createClient } from "@sanity/client";

export default createClient({
    projectId:"gtdkui4o",
    dataset: 'production',
    useCdn:true,
    apiVersion:"2024-04-24"
})