
const error404 = {resource:'./html/error404.html', status: 404, contentType:'text/html'};
const urlResourceKeyValues = {
    
    '/image/home':{resource:'./images/home.png', status: 200, contentType:'image/png'},
    '/styles/default':{resource:'./css/default.css', status: 200, contentType:'text/css'},

    '/home':{resource:'./html/index.html', status: 200, contentType:'text/html'},
    '/index':{resource:'./html/index.html', status: 200, contentType:'text/html'},
    '/staff-event-rota':{resource:'./html/index.html', status: 200, contentType:'text/html'},

    '/event/new':{resource:'./html/createEvent.html', status: 200, contentType:'text/html'},
    '/events/current':{resource:'./html/eventsCurrent.html', status: 200, contentType:'text/html'},    
    '/events/current/navigation/home':{resource:'./images/home.png', status: 200, contentType:'image/png'},
    '/events/previous':{resource:'./html/eventsPrevious.html', status: 200, contentType:'text/html'},   

    '/staff/new':{resource:'./html/createStaff.html', status: 200, contentType:'text/html'},    

    '/staff/list':{resource:'./html/staffList.html', status: 200, contentType:'text/html'},
    '/staff/list/script':{resource:'./javascript/staffList.js', status: 200, contentType:'text/javascript'},
    '/staff/list/data':{resource:'./data/staff.json', status: 200, contentType:'application/json'},
    
    '/login':{resource:'./html/userLogin.html', status: 200, contentType:'text/html'},

    '/favicon.ico':{resource:null, status: 204, contentType:'text/html'}  
}

module.exports = (cleanUrl)=>{return urlResourceKeyValues[cleanUrl]||error404;};