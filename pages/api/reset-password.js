import withContainer from "../../src/middleware/withContainer";

export default withContainer(async ({ body, method }, res, { container }) => {
  if (method !== "POST") {
    res.status(405);
    res.end(JSON.stringify({ err: "method not allowed" }));
    return;
  }

  if (!body.password) {
    res.status(400);
    res.end(JSON.stringify({ err: "password must be present" }));
    return;
  }

  if (!body.email) {
    res.status(400);
    res.end(JSON.stringify({ err: "email must be present" }));
    return;
  }

  res.setHeader("Content-Type", "application/json");

  const resetPassword = container.getResetPassword();
  const { resetSuccess, error } = await resetPassword(body);

  if (error) {
    res.status(400);
    res.end(JSON.stringify({ err: "error resetting password" }));
  } else {
    res.status(201);
    res.end(JSON.stringify({ resetSuccess }));
  }
});