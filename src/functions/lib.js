async function tryIt(fn) {
  try {
    const body = await fn();

    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}

module.exports = { tryIt };
