export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    },
    {
      name: "imgurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
