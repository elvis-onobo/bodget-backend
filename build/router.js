"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HealthCheckController_1 = __importDefault(require("./controllers/HealthCheckController"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', HealthCheckController_1.default.check);
