const bodyParser = require("koa-bodyparser"),
      bunyan     = require("bunyan"),
      compress   = require("koa-compress"),
      json       = require("koa-json"),
      kbunyan    = require("koa-bunyan"),
      koa        = require("koa"),
      route      = require("koa-route"),
      serve      = require("koa-static"),
      session    = require("koa-session"),
      views      = require("co-views");

app = module.exports = koa();

bunyanOptions = {
  name: "incubator-application",
  streams: [
    {
      level: "info",
      stream: process.stdout
    }, {
      level: "debug",
      type: "rotating-file",
      path: "logger.log",
      period: "1d",
      count: 3
    }
  ],
  serializers: bunyan.stdSerializers,
  src: true
};

compressOptions = {
  filter: function (content_type) {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
};

separator = " ";
logger = bunyan.createLogger(bunyanOptions);

app.use(kbunyan(logger, {
  level: "info",
  timeLimit: 250
}));

app.use(compress(compressOptions));
app.use(json());
app.use(session(app));
app.use(bodyParser());

render = views("views/");

app.use(serve("dist/"));

require("koa-qs")(app);

app.use(route.get("/", function*() {
  this.redirect("/index.html");
}));

logger.info('listening on port 3000');
app.listen(3000);
