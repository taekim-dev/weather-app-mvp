import { eventHandler } from 'h3'

export default eventHandler((event) => {
  console.log(`Request made to: ${event.node.req.url}`);
});
