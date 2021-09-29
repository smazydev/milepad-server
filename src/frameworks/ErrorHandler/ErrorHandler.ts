class BaseError extends Error {
  get name() {
    return this.constructor.name;
  }
}

class DatabaseError extends BaseError {}

class UserFacingError extends BaseError {}