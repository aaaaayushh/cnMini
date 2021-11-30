var pcapp = require("pcap-parser");
var parser = pcapp.parse("../dns.cap");

parser.on("packet", function (packet) {
  console.log(packet);
});
