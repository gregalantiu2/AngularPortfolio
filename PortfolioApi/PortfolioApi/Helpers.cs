using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace PortfolioApi.Models
{
  public class Helpers
  {
    public static string GetRDSConnectionString()
    {
      var appConfig = ConfigurationManager.AppSettings;

      string dbname = appConfig["PortfolioDB"];

      if (string.IsNullOrEmpty(dbname)) return null;

      string username = appConfig["sysadm"];
      string password = appConfig["AWWildcat1"];
      string hostname = appConfig["portfoliodb.csclrnfvvdgu.us-east-2.rds.amazonaws.com"];
      string port = appConfig["1433"];

      return "Data Source=" + hostname + ";Initial Catalog=" + dbname + ";User ID=" + username + ";Password=" + password + ";";
    }
  }
}
