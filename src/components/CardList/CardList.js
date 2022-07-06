import Card from "../Card/Card"

function CardList () {

    const countries = [
        {
            src: "./img/1280px-Flag_of_Germany.svg.png",
            title: 'Germany',
            population: '81.770.900',
            region:'Europe',
            capital: 'Berlin',
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'United States of America',
            population: '323.947.00',
            region: 'America',
            capital: 'Washington .D.C'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Brasil',
            population: '206.135.893',
            region: 'America',
            capital: 'Brasila'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Iceland',
            population: '334.300',
            region: 'Europe',
            capital: 'Reykjavik'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Afganistan',
            population: '22.657.145',
            region: 'Asia',
            capital: 'Kabul'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Aland Islands',
            population: '28.875',
            region: 'Europe',
            capital: 'Mariehamn'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Albania',
            population: '2.886.026',
            region: 'Europe',
            capital: 'Triana'
        },
        {
            src: "https://picsum.photos/200/200",
            title: 'Algeria',
            population: '40.400.000',
            region: 'Africa',
            capital: 'Algers'
        },
    ]

    return (
        <>
        {
            countries.map(country => <Card imgSrs={country.src} title={country.title} population={country.population} region={country.region} capital={country.capital} />)
        }
        </>
    )
}

export default CardList 