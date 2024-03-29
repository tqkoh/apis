window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "https://petstore.swagger.io/v2/swagger.json",
    urls: [
      {
        url: "specs/h23s_08_app.yaml",
        name: "h23s_08_app",
      },
      {
        url: "specs/qkjudge.yaml",
        name: "QK Judge",
      },
      {
        url: "specs/tokuteibu.yaml",
        name: "tokuteibu",
      }
    ],
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
