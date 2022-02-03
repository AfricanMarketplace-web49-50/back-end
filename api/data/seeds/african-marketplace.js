exports.seed = function (knex) {

    return knex('african-marketplace').insert([
        {
            username: 'admin',
            password: "password",
            first_name: 'admin',
            last_name: 'admin',
            email: 'admin@admin.com',
            isOwner: true,
            isAdmin: true
        },
        {
            username: 'ownertest',
            password: "password",
            first_name: 'test',
            last_name: 'owner',
            email: 'test@owner.com',
            isOwner: true
        },
        {
            username: 'usertest',
            password: "password",
            first_name: 'test',
            last_name: 'user',
            email: 'test@user.com'
        },
        {
            username: "monkey",
            password: "password",
            first_name: "monkeysee",
            last_name: "monkeydo",
            email: "monkey@banana.com",
            isOwner: true
        },
    ])

};
