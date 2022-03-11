export default function auth ({ next, store }){
    // console.log(store.state.auth.token)
    if(!store.state.token){
        return next({
            path: '/login'
        })
    }

    return next()
}