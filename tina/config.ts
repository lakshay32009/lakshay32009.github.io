import { defineStaticConfig } from "tinacms";

export default defineStaticConfig({
  branch: "main",
  build: {
    outputFolder: "cms",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content", // IMPORTANT: real folder name
        format: "json",
        fields: [
          { type: "string", label: "Page Title", name: "title" },
          { type: "rich-text", label: "Page Content", name: "body", isBody: true }
        ]
      }
    ],
  },
});
