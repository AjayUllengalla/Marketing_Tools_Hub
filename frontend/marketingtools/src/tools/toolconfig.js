const tools = [
  {
    category: "Social Tools",
    items: [
      {
        name: "Hashtag Generator",
        path: "hashtags",
        input: "Enter keyword",
        endpoint: "/hashtags"
      },
      {
        name: "Caption Generator",
        path: "caption",
        input: "Enter topic",
        endpoint: "/caption"
      }
    ]
  },
  {
    category: "Content Tools",
    items: [
      {
        name: "Blog Title Generator",
        path: "blog-title",
        input: "Enter topic",
        endpoint: "/blog-title"
      },
      {
        name: "Blog Writer",
        path: "blog-writer",
        input: "Enter topic",
        endpoint: "/blog"
      }
    ]
  },
  {
    category: "Email Tools",
    items: [
      {
        name: "Subject Line Generator",
        path: "email-subject",
        input: "Enter topic",
        endpoint: "/email"
      }
    ]
  },
  {
    category: "Campaign Tools",
    items: [
      {
        name: "UTM Builder",
        path: "utm",
        input: "Enter URL",
        endpoint: null
      }
    ]
  }
];

export default tools;