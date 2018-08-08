'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 1500 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 2000 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 2500 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

let accountNumber: number = 11234543;
function getNameAndBalance(input: any) {
    let nameAndBalance = [];

    for (let i = 0; accounts.length > i; i++) {
        if (accounts[i].accountNumber == input) {
            nameAndBalance.push(accounts[i].clientName)
            nameAndBalance.push(accounts[i].balance)
        }
        return nameAndBalance
    }
}

console.log(getNameAndBalance(accountNumber));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer

let sender: number = accounts[0].accountNumber;
let receiver: number = accounts[1].accountNumber;
let amount: number = 500;

function transferAmount(accountList: any[], senderAccNum: number, receiverAccNum: number, transferredAmount: number) {
    if (senderAccNum !== receiverAccNum) {
        for (let i = 0; accountList.length > i; i++) {
            if (accountList[i].accountNumber === senderAccNum) {
                if (accountList[i].balance > transferredAmount) {
                    accounts[i].balance = accountList[i].balance - transferredAmount
                    console.log(accountList[i].balance);

                    for (let j = 0; accountList.length > j; j++) {
                        if (accountList[j].accountNumber === receiverAccNum) {
                            accountList[j].balance = accountList[j].balance + transferredAmount
                            console.log(accountList[j].balance);

                        }
// funkcio hasenoughbalance 
                    }
                } else {
                    return 'Error! The transferred amount is higher than the balance of the sender\'s account. Please revise.'
                }
            }
        }

    } else {
        return 'Error! Could not execute: sender and receiver account numbers are identical. Please revise.'
    }
    return 'The transfer has been completed'
}

console.log(transferAmount(accounts, sender, receiver, amount));


// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

export = {
    getNameAndBalance,
    transferAmount,
    accounts
};