export default {
  name: "article",
  title: "مقاله",
  type: "document",
  fields: [
    {
      name: "title",
      title: "عنوان",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "لینک (Slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "خلاصه",
      type: "text",
      rows: 3,
    },
    {
      name: "coverImage",
      title: "تصویر کاور",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "دسته‌بندی",
      type: "string",
      options: {
        list: [
          { title: "UI/UX", value: "uiux" },
          { title: "توسعه", value: "development" },
          { title: "وردپرس", value: "wordpress" },
          { title: "سئو", value: "seo" },
          { title: "بهینه‌سازی", value: "optimization" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "publishedAt",
      title: "تاریخ انتشار",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "readingTime",
      title: "زمان خواندن (دقیقه)",
      type: "string",
      initialValue: "۵",
    },
    {
      name: "isPublished",
      title: "منتشر شده",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "body",
      title: "محتوای مقاله",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "تاریخ انتشار (جدیدترین)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
