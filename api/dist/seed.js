"use strict";
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Insert initial data into the Student table
            yield prisma.$executeRaw `INSERT INTO "Student" ("firstName", "lastName") VALUES ('John', 'Doe')`;
            yield prisma.$executeRaw `INSERT INTO "Student" ("firstName", "lastName") VALUES ('Jane', 'Smith')`;
            console.log('Seed data inserted successfully');
        }
        catch (error) {
            console.error('Error seeding database:', error);
        }
        finally {
            // Disconnect Prisma client
            yield prisma.$disconnect();
        }
    });
}
// Run the seed function
seed();
