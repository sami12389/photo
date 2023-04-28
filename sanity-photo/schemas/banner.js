export default{
   name: "banner",
   title: "Banner",
   type: "document",
   fields: [
    {
        name: "image",
        title: "Image",
        type: "array",
        of: [{type: "image"}],
        options: {
            hotspot: true,
        }
    },
    {
        name: "heading",
        title: "Heading",
        type: "array",
        of: [{type: "string"}],
    }
   ]
}