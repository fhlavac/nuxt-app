export default defineNuxtPlugin(() => {
  const crumbs = (fullPath = "aaaa/bb/cc") => {
    const params = fullPath
      .substring(1)
      .split("/")
      .filter((p) => p.length > 0);
    const crumbs = [
      {
        icon: "mdi-home",
        disabled: false,
        href: "/",
      },
    ];
    let path = "";

    params.forEach((param, index, { length }) => {
      path = `${path}/${param}`;
      // const match = context.app.router.matcher.match(path);
      const match = "TEMP";
      if (match.name !== "index") {
        if (index === length - 1) {
          crumbs.push({
            text: "temp", //context.route.meta[index]?.title || param,
            disabled: true,
          });
        } else {
          crumbs.push({
            text: "temp", //context.route.meta[index]?.title || param,
            disabled: false,
            href: path,
          });
        }
      }
    });

    return crumbs;
  };

  return {
    provide: {
      crumbs,
    },
  };
});
