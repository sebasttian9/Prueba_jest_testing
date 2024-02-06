const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    describe("testing GET /cafes", () => {
        it("Should respond with a 200 code status", async () => {
            const response = await request(server).get("/cafes").send();
            expect(response.status).toBe(200);
        });

        it("Should respond an array and at least 1 object", async () => {
            const response = await request(server).get("/cafes");
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body[0]).toBeInstanceOf(Object);
        });
    });


    describe("testing DELETE /cafes", () => {

        it("Should respond with a 404 code status", async () => {
            const id = 6;
            const token = "123456";

            const response = await request(server).delete(`/cafes/${id}`).set("Authorization", `Bearer ${token}`).send();
            expect(response.status).toBe(404);
        });

    });


    describe("testing POST /cafes", () => {

        it("Should respond with a 201 code status", async () => {
            const payload = {
                id: 10,
                name: 'chocolate',
            };
            const response = await request(server).post("/cafes").send(payload);
            expect(response.status).toBe(201);
        });

    });



    describe("testing PUT /cafes/:id", () => {

        it("Should respond with a 400 code status", async () => {
            const id = 10;
            const cafeUpdate = {
                id: 11,
                name: "chocochino",
            };
            const response = await request(server)
                .put(`/cafes/${id}`)
                .send(cafeUpdate);
            expect(response.status).toBe(400);
        });

    });

});
