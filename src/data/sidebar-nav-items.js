export default function() {
  return [
    // {
    //   title: "Blog Dashboard",
    //   to: "/blog-overview",
    //   htmlBefore: '<i class="material-icons">edit</i>',
    //   htmlAfter: ""
    // },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }

    {
      title: "Home",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },

    {
      title: "Application",
      to: "/main-application",
      htmlBefore: '<i class="material-icons">wb_cloudy</i>',
      htmlAfter: ""
    },

    {
      title: "View Data",
      to: "/view-data",
      htmlBefore: '<i class="material-icons">storage</i>',
      htmlAfter: ""
    },

    {
      title: "Connection Settings",
      to: "/config-settings",
      htmlBefore: '<i class="material-icons">settings_applications</i>',
      htmlAfter: ""
    },

    {
      title: "Errors & Logs",
      to: "/errors",
      htmlBefore: '<i class="material-icons">error</i>',
      htmlAfter: ""
    }

  ];
}
