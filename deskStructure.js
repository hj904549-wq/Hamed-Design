export const structure = (S) =>
  S.list()
    .title("مدیریت محتوا")
    .items([
      S.listItem()
        .title("مقالات")
        .child(
          S.documentTypeList("article")
            .title("مقالات")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),
      S.listItem()
        .title("پروژه‌ها")
        .child(
          S.documentTypeList("project")
            .title("پروژه‌ها")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      ...S.documentTypeListItems().filter(
        (item) => !["article", "project"].includes(item.getId())
      ),
    ]);