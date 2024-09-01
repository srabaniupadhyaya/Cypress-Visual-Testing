
  describe('Visuals Regression testing on different elements ', () => {
    it('Should compare screenshot of the entire page', () => {
      cy.visit('www.google.com')
      cy.compareSnapshot('home-page')//This has default threshold=0 so will fail with slightest change
    })

    it('Screenshot with threshold', () => {
      cy.visit('https://example.cypress.io/')
      cy.compareSnapshot('example-page-threshold',0.02)//This applies a threshold of 2% deviation
    })

    it('should compare screenshot and retry till a limit', () => {
      cy.visit('https://example.cypress.io/')
      cy.compareSnapshot({
        name: 'home-page-with-threshold',
        testThreshold: 0.002, 
        retryOptions: {
          limit: 5, // max number of retries
          delay: 500 // delay before next iteration, ms
        }
      })
    })

      it('Screenshot for an element', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('.caret').click()
        cy.get('.dropdown-menu').compareSnapshot('expanded-caret-element')
        
      })

        it('Hide element and take screenshot', () => {
          cy.visit('www.google.com')
          //this will hide the image load and reduce the flakiness of the test case
          cy.get('.lnXdpd').first().hideElement() // hideElement(false) to unhide
          cy.compareSnapshot('search-bar-element')
        })
  

  })
