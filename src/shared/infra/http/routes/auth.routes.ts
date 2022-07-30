import { Request, Response, Router } from "express";
import { requiresAuth } from "express-openid-connect";

const authRoutes = Router();

authRoutes.get("/", async (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

authRoutes.get("/profile", requiresAuth(), (req, res) => {
  res.send(req.oidc.user);
});

export { authRoutes };
