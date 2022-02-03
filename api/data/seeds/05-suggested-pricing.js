exports.seed = function (knex) {

    return knex('suggested_pricing').insert([
        { item_name: 'first thing', loc_id: 1, cat_id: 1, suggested_price: 22.22, pricing_unit: 'each' },
        { item_name: 'another item', loc_id: 1, cat_id: 2, suggested_price: 33.12, pricing_unit: 'bag of 5' },
        { item_name: 'yet another item', loc_id: 1, cat_id: 3, suggested_price: 17.62, pricing_unit: 'dozen' },
        { item_name: 'and another', loc_id: 1, cat_id: 4, suggested_price: 2.28, pricing_unit: 'lb' },
        { item_name: 'i am too tired to fill all this out', loc_id: 1, cat_id: 5, suggested_price: 102.22, pricing_unit: 'lb' }

    ]);

};

