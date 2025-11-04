import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // your repo branch
  clientId: "", // leave empty for GitHub-only mode
  token: "", // leave empty for GitHub-only mode

  build: {
    outputFolder: "admin", // Tina will build admin here
    publicFolder: ".", // root folder (where index.html lives)
  },

  media: {
    tina: {
      mediaRoot: "images", // folder for uploaded images
      publicFolder: ".", // relative to root
    },
  },

  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "/", // root folder for your site content
        format: "json", // use json for structured HTML content (safer than md)
        fields: [
          {
            type: "string",
            label: "Page Title",
            name: "title",
          },
          {
            type: "rich-text",
            label: "Page Content",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

