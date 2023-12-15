module.exports = {
    routes: [
        {
        method: 'GET',
        path: '/project/:slug',
        handler: 'project.findOne',
        config: {
            auth: false,
        }
        }
    ]
}