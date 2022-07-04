export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "bgcolor",
      title: "BgColor",
      type: "string"
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
