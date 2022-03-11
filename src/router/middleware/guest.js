export default function guest ({ next, store }){

    if(store.state.token){
        return next({
            path:'/dashboard'
        });
    }

    return next()
}