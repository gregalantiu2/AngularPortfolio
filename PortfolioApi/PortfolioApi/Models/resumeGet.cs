using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortfolioApi.Models
{
  public class resumeGet : resume
  {
    //public Nullable<int> resumeID { get; set; }
    //public string company { get; set; }
    //public string role { get; set; }
    //public string startDT { get; set; }
    //public string endDT { get; set; }
    //public Nullable<int> sort { get; set; }
    //public string description { get; set; }
    public List<string> bullets { get; set; }
  }
}
