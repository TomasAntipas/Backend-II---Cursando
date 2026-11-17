
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createHash = (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

export const isValidPassword = (password, user) => {
    return bcrypt.compare(password, user.password);
};
