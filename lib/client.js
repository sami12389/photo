import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'b3kpn6qi',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: "skF6PTdfM9OBBZv2pcXfslzmjxpGomYRjYphwzXYBIcBUSZ1MFSncDoOCm8cfjngvAt41Z7u7nuFg4082H94AijRrDY0aUO0eJo8aj2oU9rwFmDnZgTJeeSpiC0Jx5fREvCWkNkGPmzXK7jQnbMz2FHhGZIH7DemsDuz7z4q6AyArZTeaxbY" // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source)