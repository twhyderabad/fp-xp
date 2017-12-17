const R = require("ramda");


const items = [
    "Paracetamol",
    "Ibuprofen",
    "Syringe",
    "Scalpel"
];

const locations = [
    "Dispensary",
    "ICU",
    "Warehouse"
]

const inv = {
    "Warehouse": {
        "Paracetamol": 10,
        "Ibuprofen": 50,
        "Syringe": 80,
        "Scalpel": 100
    },
    "ICU": {
        "Paracetamol": 0,
        "Ibuprofen": 20,
        "Syringe": 7,
        "Scalpel": 8
    },
    "Dispensary": {
        "Paracetamol": 50,
        "Ibuprofen": 33,
        "Syringe": 10,
        "Scalpel": 80
    }
};

const txns = [
    {
      "from": "Warehouse",
      "to": "Dispensary",
      "item": "Paracetamol",
      "quantity": 2
    },
    {
      "from": "Warehouse",
      "to": "Dispensary",
      "item": "Ibuprofen",
      "quantity": 5
    },
    {
      "from": "Dispensary",
      "to": "ICU",
      "item": "Syringe",
      "quantity": 2
    },
    {
      "from": "Warehouse",
      "to": "ICU",
      "item": "Scalpel",
      "quantity": 10
    }
];

const newInv = (inv, txn) => {
    const { from, to, item, quantity } = txn;
    const fromPath = R.lensPath([from, item]);
    const toPath = R.lensPath([to, item]);

    return R.pipe(
        R.over(fromPath, x => x - quantity),
        R.over(toPath, x => x + quantity)
    )(inv);
}

const transact = R.reduce(newInv);

console.log(transact(inv, txns));
