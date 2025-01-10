import { Router } from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../controllers/user.controller";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").put(updateUser).get(getUserById).delete(deleteUser);

export default router;