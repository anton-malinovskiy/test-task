// carRentTest.js
import { SearchPage } from "../support/page-object/search-page";

const searchPage = new SearchPage();

describe('Rent a car e2e flow', () => {
    it('Should be able to choose car and successfully book it with valid payment method', () => {
        searchPage.visit()
        searchPage.getCountryDropdown().select('France')
        searchPage.getCityDropdown().select('Paris')
        searchPage.getModelInput().type('Toyota Aygo')
        cy.getPickUpDate(2).then((pickupDate) => {
            searchPage.getPickupDatePicker().clear().type(pickupDate);
            cy.getDropoffDate(pickupDate, 2).then((dropoffDate) => {
                searchPage.getDropOffDatePicker().clear().type(dropoffDate);
            });
        });
        searchPage.getSearchButton().click()
        searchPage.getRentButton().click()
        searchPage.getRentButton().click()
        searchPage.getNameInput().type('John')
        searchPage.getLastNameInput().type('Doe')
        searchPage.getCardNumberInput().type('5105105105105100')
        searchPage.getEmailInput().type('example@mail.com')
        searchPage.getRentButton().click()
        searchPage.getSuccessAlert().contains("Success")
    })

    it('Should not be able to rent a car with dates in the past', () => {
        searchPage.visit();
        searchPage.getCountryDropdown().select('France');
        searchPage.getCityDropdown().select('Paris');
        searchPage.getModelInput().type('Toyota Aygo');
        cy.getPastDate(2).then((pickupDate) => {
            searchPage.getPickupDatePicker().clear().type(pickupDate);
            cy.getPastDate(1).then((dropoffDate) => {
                searchPage.getDropOffDatePicker().clear().type(dropoffDate);
            });
        });
        searchPage.getSearchButton().click();
        searchPage.getWrongDatesAlert().contains("Please check provided dates")
    })

    it('Should not be able complete checkout with wrong country and city pair', () => {
        searchPage.visit()
        searchPage.getCountryDropdown().select('France')
        searchPage.getCityDropdown().select('Cracow')
        searchPage.getModelInput().type('Toyota Aygo')
        cy.getPickUpDate(2).then((pickupDate) => {
            searchPage.getPickupDatePicker().clear().type(pickupDate);
            cy.getDropoffDate(pickupDate, 2).then((dropoffDate) => {
                searchPage.getDropOffDatePicker().clear().type(dropoffDate);
            });
        });
        searchPage.getSearchButton().click()
        searchPage.getWrongCountryCity().contains("Country doesn't match city")
    })

    it('Should not be able complete checkout with invalid credit card data', () => {
        searchPage.visit()
        searchPage.getCountryDropdown().select('France')
        searchPage.getCityDropdown().select('Paris')
        searchPage.getModelInput().type('Toyota Aygo')
        cy.getPickUpDate(2).then((pickupDate) => {
            searchPage.getPickupDatePicker().clear().type(pickupDate);
            cy.getDropoffDate(pickupDate, 2).then((dropoffDate) => {
                searchPage.getDropOffDatePicker().clear().type(dropoffDate);
            });
        });
        searchPage.getSearchButton().click()
        searchPage.getRentButton().click()
        searchPage.getRentButton().click()
        searchPage.getNameInput().type('John')
        searchPage.getLastNameInput().type('Doe')
        searchPage.getCardNumberInput().type('sdcsdc')
        searchPage.getEmailInput().type('example@mail.com')
        searchPage.getRentButton().click()
        searchPage.getWrongCardAlert().contains("Card number contains wrong chars")
    })
})
