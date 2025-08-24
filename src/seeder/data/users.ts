export default [
    {
        Username: 'admin',
        Password: 'password',
        Email: 'admin@echoairlines.com',
        FirstName: 'Gordon',
        LastName: 'Freeman',
        FirstLoginCompleted: true,
        IsVerified: true,
        Roles: {
            connect: [{ Slug: 'admin' }, { Slug: 'user' }]
        },
        PrivacySettings: {
            create: {
                ShowOnlineStatus: false,
                ShowFirstName: false,
                ShowLastNameInitial: false,
            }
        }
    },
    {
        Username: 'johndoe',
        Password: 'password',
        Email: 'johndoe@echoairlines.com',
        FirstName: 'John',
        LastName: 'Doe',
        FirstLoginCompleted: false,
        Roles: {
            connect: [{ Slug: 'user' }]
        },
        PrivacySettings: {
            create: {
                ShowOnlineStatus: true,
                ShowFirstName: true,
                ShowLastNameInitial: true,
            }
        }
    },
];