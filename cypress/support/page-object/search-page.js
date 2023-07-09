import { searchPageSelectors } from "../../selectors/search-page-selectors";

export class SearchPage {
    visit() {
        cy.visit("http://qalab.pl.tivixlabs.com");
    }

    getCountryDropdown() {
        return cy.get(searchPageSelectors.dropdownCountry);
    }

    getCityDropdown() {
        return cy.get(searchPageSelectors.dropdownCity);
    }

    getModelInput() {
        return cy.get(searchPageSelectors.inputModel);
    }

    getPickupDatePicker() {
        return cy.get(searchPageSelectors.datePickerPickupDate);
    }

    getDropOffDatePicker() {
        return cy.get(searchPageSelectors.datePickerDropOffDate);
    }

    getSearchButton() {
        return cy.get(searchPageSelectors.buttonSearch);
    }

    getSuccessAlert() {
        return cy.get(searchPageSelectors.alertSuccess);
    }

    getWrongCardAlert() {
        return cy.get(searchPageSelectors.alertSuccess);
    }

    getWrongCountryCity() {
        return cy.get(searchPageSelectors.alertWrongCityCountry);
    }

    getWrongDatesAlert() {
        return cy.get(searchPageSelectors.alertWrongDates);
    }

    getRentButton() {
        return cy.contains(searchPageSelectors.buttonRent);
    }

    getNameInput() {
        return cy.get(searchPageSelectors.inputName);
    }

    getLastNameInput() {
        return cy.get(searchPageSelectors.inputLastName);
    }

    getCardNumberInput() {
        return cy.get(searchPageSelectors.inputCardNumber);
    }

    getEmailInput() {
        return cy.get(searchPageSelectors.inputEmail);
    }
}
