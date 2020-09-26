var FindProxyForURL=(function(){
    var cc = function(url, host){
        var googleDM = ['.googleusercontent.com','.g.co','.google-analytics.com','.googleadapis.com','.googleapis.cn','.gstatic.cn','.gstatic.com','.googleapis.com'];
        var edu = "HTTPS 203.252.224.228;";
        var ghelp = "HTTPS default.px.skyzip.de:443;";
        var fl = 'HTTPS fr.cn-cloudflare.com;HTTPS jp1.cn-cloudflare.com;HTTPS ca.cn-cloudflare.com;HTTPS nres.tech; HTTPS www.a.tsukuba-tech.ac.jp;HTTPS www.iamas.ac.jp;HTTPS c.cddm.me;HTTPS explorer.motoco.in;HTTPS jp2.jerry74.com;';
        ghelp = fl;
        for(var i=0;i<googleDM.length;i++){
            var fe = host.split(googleDM[i]);
            if(fe.length == 2 && fe[1] === ''){
                return fl;
            }
        }
        if(/(^|^.+\.)google\.com$/.test(host) || /^.+\.google(\.com|\.co|)\.[a-z]+$/.test(host) || /^about\.google$/.test(host) || /(^|^.+\.)android\.com/.test(host)) return ghelp;
        else if(0 || /^.+\.googletagservices\.com$/.test(host) || /^.+\.googletagmanager\.com$/.test(host) || /^.+\.mongodb\.com$/.test(host) || /(^|^.+\.)php\.net$/.test(host) || /^.+\.rlcdn\.com$/.test(host) || host == "connect.facebook.net" || /^.+\.easysol\.net$/.test(host) || /^.+\.youtube\.com$/.test(host) || /^.+\.googlevideo\.com$/.test(host) || /^.+\.ggpht\.com$/.test(host) || /^.+\.ytimg\.com$/.test(host) || /(^|^.+\.)twitter\.com$/.test(host) || /(^|^.+\.)twimg\.com$/.test(host) || /(^|^.+\.)amazonaws\.com/.test(host) || /(^|^.+\.)wikipedia\.org/.test(host) || /(^|^.+\.)tracemyip\.org/.test(host) || /(^|^.+\.)dnsdumpster\.com/.test(host) || /(^|^.+\.)enjoysudoku\.com/.test(host) || /(^|^.+\.)imgur\.com/.test(host) || /(^|^.+\.)mysql\.com/.test(host) || /(^|^.+\.)vpngate\.(com|net)/.test(host) || /(^|^.+\.)whatsapp\.(com|net)/.test(host)) return fl;
        else if(/(^|^.+\.)cnki\.net/.test(host)){
            return edu;
        }
        return "DIRECT";
    }
    return cc;
})();
