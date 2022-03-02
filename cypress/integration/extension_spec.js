
describe('visit local', () => {
    it('Visits the site', () => {
      cy.visit('http://localhost:3030/')
    })
  })

describe('increment/decrement to 0', () => {
    it('clicks "increment"', () => {
        let increment = cy.get('#increment_button')
        increment.click()
    })
    it('clicks "decrement"', () => {
        let decrement = cy.get('#decrement_button')
        decrement.click()
    })
    it("check count", () => {
        let numValue = cy.get('#count')
        numValue.contains('count = 0')
    })
    it("check last clicked", () => {
        let numValue = cy.get('#lastClicked')
        numValue.contains('decrement')
    })
})

describe('increment/decrement to 3', () => {
    it('clicks "increment"', () => {
        // cy.visit('http://localhost:3030/')
        // cy.contains('increment')
        let increment = cy.get('#increment_button')
        increment.click()
        increment.click()
        increment.click()
        increment.click()
    })
    it('clicks "decrement"', () => {
        // cy.visit('http://localhost:3030/')
        // cy.contains('increment')
        let decrement = cy.get('#decrement_button')
        decrement.click()
    })
    it("check count", () => {
        let numValue = cy.get('#count')
        numValue.contains('count = 3')
    })
    it("check last clicked", () => {
        let numValue = cy.get('#lastClicked')
        numValue.contains('decrement')
    })
})

describe('increment/decrement to -5', () => {
    it('clicks "decrement"', () => {
        // cy.visit('http://localhost:3030/')
        // cy.contains('increment')
        let decrement = cy.get('#decrement_button')
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
        decrement.click()
    })
    it('clicks "increment"', () => {
        // cy.visit('http://localhost:3030/')
        // cy.contains('increment')
        let increment = cy.get('#increment_button')
        increment.click()
        increment.click()
        increment.click()
    })
    it("check count", () => {
        let numValue = cy.get('#count')
        numValue.contains('count = -5')
    })
    it("check last clicked", () => {
        let numValue = cy.get('#lastClicked')
        numValue.contains('increment')
    })
})

// describe('decrement', () => {
//     it('clicks "decrement"', () => {
//         // cy.visit('http://localhost:3030/')
//         // cy.contains('increment')
//         let increment = cy.get('#increment_button')
//         let decrement = cy.get('#decrement_button')
//         increment.click()
//         decrement.click()
//     })
// })