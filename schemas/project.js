export default {
  name: "project",
  title: "پروژه",
  type: "document",
  fields: [
    {
      name: "title",
      title: "عنوان",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "توضیح کوتاه",
      type: "text",
      rows: 2,
    },
    {
      name: "coverImage",
      title: "تصویر پروژه",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "technologies",
      title: "تکنولوژی‌ها",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "liveUrl",
      title: "لینک زنده",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "لینک گیت‌هاب",
      type: "url",
    },
    {
      name: "order",
      title: "ترتیب نمایش",
      type: "number",
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "ترتیب نمایش",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
