import { courseRouter } from "./cource.route.js";
import { siteRouter } from "./site.route.js";

function route(app) {

  app.use('/courses', courseRouter);
  app.use('/', siteRouter);

}

export { route };
