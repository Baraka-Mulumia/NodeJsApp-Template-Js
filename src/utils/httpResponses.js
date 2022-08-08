import { extend } from "lodash-es";

const BadRequest = {
    error: "Bad Request",
    status: 400,
  },
  Forbidden = {
    error: "Forbidden",
    status: 403,
  },
  Success = {
    error: "",
    status: 200,
  };

const httpResponses = {
  Success,
  BadRequest,
  Forbidden,

  Unauthorized: {
    error: "Unauthorised",
    status: 401,
  },

  NotFound: {
    error: "Not Found",
    status: 404,
  },

  UnprocessableEntity: {
    status: 422,
    error: "Unprocessable Entity",
  },

  InternalServerError: {
    error: "Internal Server Error",
    status: 500,
  },

  onlyAdmin: extend({}, Forbidden, {
    message: "Only admins are allowed to do this!",
  }),

  NoPermission: extend(
    {},
    {
      error: "Forbidden",
      status: 403,
      message: "You do not have permission to consume this resource!",
    }
  ),

  invalidId: extend({}, BadRequest, {
    message: "Invalid Id parameter",
  }),

  invalidSearchTerm: extend({}, BadRequest, {
    message: "Invalid search term",
  }),

  missingAttr(attrs) {
    return extend({}, BadRequest, {
      message: `Attribute(s) (${attrs.join(",")}) seem(s) to be missing`,
    });
  },

  unwantedAttr(attrs) {
    return extend({}, BadRequest, {
      message: `Attribute(s) (${attrs.join(",")}) can't be updated`,
    });
  },

  uniqueAttr(attrs) {
    return extend({}, BadRequest, {
      message: `Attribute(s) [${attrs.join(",")}] must be unique`,
    });
  },

  custom(msg) {
    return extend({}, BadRequest, {
      message: msg,
    });
  },

  // REST
  addFailure() {
    return extend({}, BadRequest, {
      message: "Item WAS NOT added",
    });
  },

  deleteFailure() {
    return extend({}, BadRequest, {
      message: "Item WAS NOT deleted",
    });
  },

  updateFailure() {
    return extend({}, BadRequest, {
      message: "Item WAS NOT updated",
    });
  },

  addSuccess() {
    return extend({}, Success, {
      status: 201,
      message: "Item added successfully",
    });
  },

  deleteSuccess() {
    return extend({}, Success, {
      status: 204,
      message: "Item deleted successfully",
    });
  },

  updateSuccess() {
    return extend({}, Success, {
      status: 202,
      message: "Item updated successfully",
    });
  },

  empty: [],
};

export default httpResponses;
