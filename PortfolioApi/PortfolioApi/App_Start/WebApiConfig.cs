using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace PortfolioApi
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      //Enable CORS
      config.EnableCors();

      // Web API configuration and services
      GlobalConfiguration.Configuration.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;

      // Web API routes
      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );
    }
  }
}
