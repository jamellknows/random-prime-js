export function randomprime(){

    let arr = [];
    let MPI = Math.PI;
    let rand1 = (Math.random())*10000;
    
        for(let i = 0 ; i < rand1; i++)
        {
            let y1 = MPI/3 * (1 + 6 * i);
            y1 = Math.sqrt(Math.pow(y1/MPI, 2) -0.25);
            let y2 = 5*MPI/3 * (1 + 6/5 * i);
            y2 = Math.sqrt(Math.pow(y2/MPI, 2) - 0.25);
            arr.push(y1);
            arr.push(y2);
        }
        let prime =[]
        for(let i = 0; i < arr.length; i++)
        {
            if(Math.floor(arr[i]) % 2 != 0)
            {   
                arr[i] = arr[i] + 1;
    
            }
            prime.push(Math.floor(arr[i]) + 1);
            prime.push(Math.floor(arr[i]) - 1);
        }
        prime = prime.sort(function(a,b){return a-b});
    
    
        let rePrime = []
        for(let i = 0; i < prime.length ; i++)
        {
            if(rePrime.indexOf(prime[i]) < 0 )
            {
                rePrime.push(prime[i]);
            }
        }
        
        for (let i = 0; i < rePrime.length; i++)
        {
            if(isNaN(rePrime[i]))
            {
                rePrime.splice(i,1);
            }
        }

    
        return rePrime[rePrime.length -1];
    
    }
