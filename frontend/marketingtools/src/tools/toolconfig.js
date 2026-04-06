const tools = [
  {
    category: "Social Tools",
    items: [
      {
        name: "Hashtag Generator",
        path: "hashtags",
        input: "Enter keyword",
        endpoint: "/social/hashtags"
      },
      {
        name: "Caption Generator",
        path: "caption",
        input: "Enter topic",
        endpoint: "/social/description"
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
        endpoint: "/blog/blog-title"
      },
      {
        name: "Blog Writer",
        path: "blog-writer",
        input: "Enter topic",
        endpoint: "/blog/blog"
      }
    ]
  },
  {
    category: "Email Tools",
    items: [
      {
        name: "Email Template",
        path: "email-template",
        input: "Enter topic",
        endpoint: "/email/email-template"
      },
      {
        name: "Subject Line Generator",
        path: "email-subject",
        input: "Enter topic",
        endpoint: "/email/subjectline"
      }
    ]
  },
  {
    category: "Campaign Tools",
    items: [
      {
        name: "UTM Builder",
        path: "utm",
        input: "",
        endpoint: "/campaign/utm"
      }
    ]
  }
];

export default tools;