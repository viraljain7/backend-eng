import {serve} from 'bun';

serve({

    fetch(request){
        const url=new URL(request.url);
        if(url.pathname==='/'){
            return new Response("Hello welcome\n",{status:200})
        }
        else if(url.pathname==='/chai'){
            return new Response("Hello to chai aur code\n",{status:200})
        }
        else{
            return new Response("404 error\n",{status:404})
        }
    },
    port:3000,
    hostname:'127.0.0.1',

})