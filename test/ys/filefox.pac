var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+copyplay", {
    "+copyplay": function(url, host, scheme) {
      switch (scheme) {
          case "http":
            return "HTTPS www.ssxsssxs.space;DIRECT;";
		      break;
		  case "ftp":
		    return "DIRECT;";
		      break;
		  case "https":
		    return "HTTPS m.qinswodiac.club; HTTPS login.paoshijie.space; HTTPS www.ssxsssxs.space; HTTPS ifp-kundenportal.de; HTTPS deb9-vm-2nd.iat.uni-bremen.de;HTTPS 103.214.142.178;HTTPS 103.214.143.30;HTTPS 107.170.118.36;HTTPS www.bizval.com.au;HTTPS a.justproxy.io;HTTPS b.justproxy.io;HTTPS c.justproxy.io;HTTPS 103.214.141.28;HTTPS 103.214.141.50;HTTPS 103.214.141.60;HTTPS 103.214.141.138;"
		      break;
          default:
			return "DIRECT;";
        }
    }
});
