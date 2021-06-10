export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c2383e61967400b2e5bd71",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4yfzv46x",
                  apiId: "3fa2b875-cfe8-4d06-a146-035c47770c50",
                },
                {
                  buildHookId: "60c2383ed0bf0b00dd28c52a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7t7yi8od",
                  apiId: "5fc968ab-9a36-4970-8217-562f242a1bdc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/soreilly-smartling-sanity/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7t7yi8od.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
