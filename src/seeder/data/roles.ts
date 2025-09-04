export default [
    {
        Slug: 'admin',
        Name: 'Admin',
    },
    {
        Slug: 'user',
        Name: 'User',
        Permissions: {
            connect: [
                { Slug: 'my-profile-view' },
                { Slug: 'my-profile-update' }
            ]
        },
    },
    {
        Slug: 'member',
        Name: 'Member',
    },
    {
        Slug: 'owner',
        Name: 'Owner',
    },
    {
        Slug: 'manager',
        Name: 'Manager',
    }
];