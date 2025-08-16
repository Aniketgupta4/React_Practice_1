 // cdn of react and react-dom 

const element = React.createElement('h1',{},'hello baby')
// old method -> react 17 jab tab whole data not load we cant click to any button and anything so user exp bekar hua -> beacuse od js singe threaded nature

// ReactDOM.render(element,document.getElementById('root'))



// according to warning in console
// new method ->no warning in console
// react 18 se ye method use hota hai -> website load hote hue bhi kisi option pe ja shakte hai -> so ui improve
// react old process ko rokta hai and new process(current) ko chalta hai -> so ui improve ->single threaded

const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(element)
// Reactroot is a container which is used to render the react element 'root'




// cdn -> content delivery network -> cloudfair example of cdn -> store static data images videos  
// big company (youtube) data store in servers (us) so i req then ye us se data lake dega time taking 
// so ye data ko chote chote servers me store karte hai (india) -> so i req then ye pass wale server se data lake dega time bache ga-> by cdn
// ek main server slave walo ko bheje ga data of yt manually do this work -> so cdn introduced chote chote
// ap jaha pe bhi ho waha se pass wale server se cdn ke through data ayega warna main server se ayega if slave server pe ni tha toh
// so ab main se slave mai wo content agya so next time pass wale se ayeg data -> and wo slave server apne pass wale server ko bhi de shakta hai data

// so cdn is a network of servers that are distributed across different locations to deliver content more efficiently
// it helps to reduce latency and improve the performance of web applications by serving content from a server
// dynamic data like comment not store in cdn beacuse frequent change hora hai data -> so main server pe hoga change not in slave server ->dynamic data from main server

