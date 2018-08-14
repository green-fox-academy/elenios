'use strict';

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer

// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 1500 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 2000 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 2500 }
];

function getNameAndBalance(accountNumberInput: number) {
    let nameAndBalance = [];

    accounts.forEach(function (array) {
        if (accountNumberInput == array.accountNumber) {
            nameAndBalance.push(array["clientName"], array["balance"])
        }
    });

    return nameAndBalance;
}

let sender: number = accounts[0].accountNumber;
let receiver: number = accounts[1].accountNumber;
let amount: number = 500;

function transferAmount(accountList: any[], senderAccNum: number, receiverAccNum: number, transferredAmount: number) {


    if (senderAccNum !== receiverAccNum) {
        for (let i = 0; i < accountList.length; i++) {
            if (accountList[i].accountNumber === senderAccNum) {
                if (accountList[i].balance > transferredAmount) {
                    accounts[i].balance = accountList[i].balance - transferredAmount
                    console.log("New balance of the sender is " + accountList[i].balance);

                    for (let j = 0; accountList.length > j; j++) {
                        if (accountList[j].accountNumber === receiverAccNum) {
                            accountList[j].balance = accountList[j].balance + transferredAmount
                            console.log("New balance of the receiver is " + accountList[j].balance);

                        } else if (accountList[j].indexOf == - 1) {
                             return '404 - account not found'
                        }
                    }
                } else {
                    return 'Error! The transferred amount is higher than the balance of the sender\'s account. Please revise.'
                }
            } else if (accountList[i].indexOf == -1) {
                return '404 - account not found'
            }
        }

    } else {
        return 'Error! Could not execute: sender and receiver account numbers are identical. Please revise.'
    }
    return 'The transfer has been completed'
}


function accountCheck(accountList, senderAccNum: number, receiverAccNum: number, money: number) {
    let foundSenderAccount: boolean = false;
    let foundReceiverAccount: boolean = false;
    let message = '';

    accountList.forEach(function (array) {
        if (senderAccNum == array.accountNumber) {
            foundSenderAccount = true;
        }
        if (receiverAccNum == array.accountNumber) {
            foundReceiverAccount = true;
        }
    });

    if (foundSenderAccount && foundReceiverAccount) {
        message = 'found';
    } else {
        message = '404 - account not found';
    }
    return message;
}


console.log(getNameAndBalance(11234543));
console.log(transferAmount(accounts, sender, receiver, amount));
console.log(accountCheck(accounts, sender, receiver, amount));


/*
function getNameAndBalance(accountNumberInput: number) {
    let nameAndBalance = [];

    for (let accPosition = 0; accPosition < accounts.length; accPosition++) {
        if (accounts[accPosition].accountNumber == accountNumberInput) {

            nameAndBalance.push(accounts[accPosition].clientName);
            nameAndBalance.push(accounts[accPosition].balance);
        }
    }
    return nameAndBalance
}

console.log(getNameAndBalance(11234543));




export = {
    getNameAndBalance,
    transferAmount,
    accounts
};
*/