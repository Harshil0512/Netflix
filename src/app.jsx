import Card from './card';
import cardList from './cardList';

function App(){
    return <>
            <h1 className='heading'>Top 5 Netflix Series of 2022</h1>
            <section className='content row flex-wrap align-items-center justify-content-center col-10 mx-auto'>
                {cardList.map((i)=><Card key={i.id} name={i.name} title={i.title} img={i.img} link={i.link} />)}
            </section>
        </>;
    
}


export default App;