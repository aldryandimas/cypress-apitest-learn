describe("Given I have the user data API", () => {
  context("When I call it", () => {
    it("Then I can GET any data I want", () => {
      cy.request({
        method: "GET",
        url: "/api/users",
      }).should((response) => {
        expect(response.status).to.eq(200);
        Cypress._.each(response.body.data, (user) => {
          expect(user.email).to.not.be.null;
          expect(user).to.have.all.keys(
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          );
        });
      });
    });
  });
});
