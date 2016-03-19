import ApplicationController from "./ApplicationController";
import bodyParser from "koa-bodyparser";
import bunyan from "bunyan";
import compress from "koa-compress";
import json from "koa-json";
import kbunyan from "koa-bunyan";
import koa from "koa";
import krouter from "koa-router";
import logger from './logger';
import serve from "koa-static";
import session from "koa-session";

const app = module.exports = koa();
const router = krouter();

const compressOptions = {
  filter: (content_type) => {
    return /text/i.test(content_type);
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
};

app.use(kbunyan(logger, {
  level: "info",
  timeLimit: 250
}));

app.use(compress(compressOptions));
app.use(json());
app.use(session(app));
app.use(bodyParser());

app.use(serve("dist/"));

require("koa-qs")(app);

router.get("/", function*() {
  this.redirect("/index.html");
});

(new ApplicationController()).register(router);

app
  .use(router.routes())
  .use(router.allowedMethods());

logger.info('listening on port 3000');
app.listen(3000);
