
import userDAO from "../dao/user.dao.js";

class UserRepository {
    async getByEmail(email) {
    return userDAO.getByEmail(email);
    }

    async create(userData) {
    return userDAO.create(userData);
    }
}

export default new UserRepository();
