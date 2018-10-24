var users = [
    {
        _id: 1,
        user: '100000724400369@buzzmonitor.com.br',
        email: 'johanny@mail.com',
        activation_state: 'Active',
        account_type: 'Unassigned',
        password: '123',
        user_data: {
            brands: [
                { name: 'Santander', collected_posts: 200000, pause_brand: false},
                { name: 'McDonalds', collected_posts: 10000, pause_brand: false},
                { name: 'Subway', collected_posts: 150000, pause_brand: false}
            ]
        },
        user_properties: {
            brands_limit: 3,
            posts_limit: 600000,
            analytics_profiles_limit: 0,
            crm_profiles_limit: 0,
            crawnling_quota: 200
        },
        projects_settings: {
            unlimited_projects: false,
            unlimited_posts: false,
            pause_collect: false,
            unlimited_crawling: false,
            unlimited_analytics_profiles: false,
            unlimited_crm_profiles: false,
            unlimited_crawling: false
        },
        modules: {
            active_analytic_pro: true,
            active_dashboards: true,
            active_historical_search: true
        },
        other: {
            sponsered_facebook_posts: false,
            social_news_sources: ''
        }
        
    }
];

module.exports = (app) => {

    let controller = {};

    controller.listUsers = function(req, res) {
        res.json(users);
    };

    controller.getUser = function(req, res) {
        let user_id = req.params.id;
        let user = users.filter(function(user) {
            return user._id == user_id;
        })[0];

        user ? res.json(user) : res.status(404).send('User not found!');
    };

    controller.saveUser = function(req, res) {
        let user = req.body;

        user = update(user);

        res.json(user);
    }

    update = (userUpdate) => {
        users = users.map(function(user) {
            if(user._id == userUpdate._id) {
                user = userUpdate;
            }
            return user;
        });
        return userUpdate;
    }
    return controller;
    
}