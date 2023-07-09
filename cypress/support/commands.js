// cypress/support/commands.js

function formatDate(date) {
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return year + '-' + month + '-' + day;
}

Cypress.Commands.add("getPickUpDate", (weeksFromNow) => {
    let date = new Date();
    date.setDate(date.getDate() + (7 * weeksFromNow));

    return formatDate(date);
});

Cypress.Commands.add("getDropoffDate", (pickupDate, weeksFromPickup) => {
    let date = new Date(pickupDate);
    date.setDate(date.getDate() + (7 * weeksFromPickup));

    return formatDate(date);
});

Cypress.Commands.add("getPastDate", (weeksBefore) => {
    let date = new Date();
    date.setDate(date.getDate() - (7 * weeksBefore));

    return formatDate(date);
});
