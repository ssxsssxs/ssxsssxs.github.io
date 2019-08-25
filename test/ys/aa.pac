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
            return "DIRECT;";
		  case "ftp":
		    return "DIRECT;";
		  case "https":
		    return "HTTPS 13.229.223.59;HTTPS www.cookietv.com;";
          default:
			return "DIRECT;";
        }
    }
});
