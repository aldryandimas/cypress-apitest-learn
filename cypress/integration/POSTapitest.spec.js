describe("Given I have the register API", () => {
  context("When I call it", () => {
    it("Then I can POST with correct format and register successfully", () => {
      cy.request({
        method: "POST",
        url: "/api/register",
        body: {
          email: "eve.holt@reqres.in",
          password: "pistol",
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.key("id", "token");
        cy.log(response.body);
      });
    });
  });

  context("When I call it", () => {
    it("Then I can POST with wrong format and register unsuccessfully", () => {
      cy.request({
        method: "POST",
        url: "/api/register",
        body: {
          email: "sydney@fife",
        },
        failOnStatusCode: false,
      }).should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.key("error");
        cy.log(response.body);
      });
    });
  });
});
