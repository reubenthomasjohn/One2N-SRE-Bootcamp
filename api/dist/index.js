"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const client_1 = require("@prisma/client");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const prisma = new client_1.PrismaClient();
const app = express();
app.use(express.json());
const port = 3000;
app.get("/students", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield prisma.student.findMany({});
    res.json(students);
}));
app.get("/students/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield prisma.student.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(student);
}));
app.post("/student", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.student.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    });
    res.json({
        msg: "created student"
    });
}));
app.put("/student/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const post = yield prisma.student.update({
        where: { id: Number(id) },
        data: {
            firstName: firstName,
            lastName: lastName
        }
    });
    res.json(post);
}));
app.delete("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield prisma.student.delete({
        where: {
            id: parseInt(id),
        },
    });
    res.json(user);
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    console.log(`[server]: The connection URL is ${process.env.DATABASE_URL}`);
});
