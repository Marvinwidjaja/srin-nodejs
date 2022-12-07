export const validateUpdates = (req, allowedUpdatesList) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = allowedUpdatesList;
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return {
      success: false,
      error: "Invalid updates!",
    };
  }

  return {
    success: true,
    updates: updates,
  };
};
