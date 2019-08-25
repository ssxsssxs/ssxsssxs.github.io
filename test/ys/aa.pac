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
            return "HTTPS 97.64.38.155;HTTPS glzppay.gllkgame.com";
		      break;
		  case "ftp":
		    return "DIRECT;";
		      break;
		  case "https":
		    return "HTTPS 107.170.118.36;HTTPS www.justproxy.io;HTTPS 97.64.38.155;HTTPS glzppay.gllkgame.com;"//HTTPS us21.tcdn.me;HTTPS nl11.tcdn.me;HTTPS us9.tcdn.me";
		      break;
          default:
			return "DIRECT;";
        }
    }
});
